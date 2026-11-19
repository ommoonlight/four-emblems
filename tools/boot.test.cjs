const test=require('node:test'),assert=require('node:assert/strict'),vm=require('node:vm'),fs=require('node:fs');
function startup(native){
 const window={fetch:native,addEventListener(){}};
 const context={window,document:{body:null,getElementById(){return null},addEventListener(){}},navigator:{},location:{origin:'https://test.invalid'},performance:{getEntriesByType(){return []}},XMLHttpRequest:class{open(){}send(){}},setInterval(){return 0},clearInterval(){},setTimeout,clearTimeout,Request,Response,Headers,AbortController,DOMException,URL,Uint8Array};
 vm.runInNewContext(fs.readFileSync(require('node:path').join(__dirname,'../web/boot.js'),'utf8'),context);return window.fetch;
}
test('startup propagates caller cancellation before headers without retrying',async()=>{
 let calls=0;const fetch=startup((_,init)=>{calls++;return new Promise((_,reject)=>init.signal.addEventListener('abort',()=>reject(new DOMException('Aborted','AbortError'))));});
 const c=new AbortController();const pending=fetch('https://test.invalid/texture.webp',{signal:c.signal});await new Promise(r=>setTimeout(r,5));c.abort();await assert.rejects(pending,{name:'AbortError'});assert.equal(calls,1);
});
test('startup cancels an incomplete response stream without caching a partial body',async()=>{
 let cancelled=false,calls=0;const fetch=startup(async()=>{calls++;return new Response(new ReadableStream({start(c){c.enqueue(new Uint8Array([1,2]));},cancel(){cancelled=true;}}));});
 const c=new AbortController();const pending=fetch(new Request('https://test.invalid/texture.webp'),{signal:c.signal});await new Promise(r=>setTimeout(r,5));c.abort();await assert.rejects(pending,{name:'AbortError'});assert.equal(cancelled,true);assert.equal(calls,1);
});
test('startup returns a complete body and does not retain an abort listener on it',async()=>{
 const fetch=startup(async()=>new Response(new Uint8Array([1,2,3]),{headers:{'content-length':'3'}}));
 const c=new AbortController();const response=await fetch('https://test.invalid/texture.webp',{signal:c.signal});c.abort();assert.deepEqual([...new Uint8Array(await response.arrayBuffer())],[1,2,3]);assert.equal(response.headers.get('content-length'),null);
});
test('queue-owned streaming bypasses startup buffering and preserves the cancellation signal',async()=>{
 let request;const fetch=startup(async r=>{request=r;return new Response('ok');});const c=new AbortController();
 const response=await fetch('https://test.invalid/texture.webp',{signal:c.signal,headers:{'X-Four-Emblems-Prefetch':'1'}});
 assert.equal(request.headers.get('X-Four-Emblems-Prefetch'),'1');c.abort();assert.equal(request.signal.aborted,true);assert.equal(await response.text(),'ok');
});
