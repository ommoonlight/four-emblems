// Unpack a single-file Cocos Creator build into a normal static site.
// Usage: node tools/unpack.js site/index.html site
// The build ends with:  })({ "path": "...", "path": ["mime","base64"] })
// This script writes every entry to disk and replaces the map with {}.

const fs = require('fs');
const path = require('path');

const src = process.argv[2];
const outDir = process.argv[3];
if (!src || !outDir) {
  console.error('usage: node tools/unpack.js <index.html> <outDir>');
  process.exit(1);
}

const txt = fs.readFileSync(src, 'utf8');
const anchor = txt.lastIndexOf('})({');
if (anchor < 0) { console.error('packed map not found'); process.exit(1); }

// find the object literal starting at the '{' right after '})('
const objStart = txt.indexOf('{', anchor);
let depth = 0, inStr = false, quote = '', esc = false, objEnd = -1;
for (let p = objStart; p < txt.length; p++) {
  const ch = txt[p];
  if (inStr) {
    if (esc) esc = false;
    else if (ch === '\\') esc = true;
    else if (ch === quote) inStr = false;
    continue;
  }
  if (ch === '"' || ch === "'") { inStr = true; quote = ch; continue; }
  if (ch === '{') depth++;
  else if (ch === '}') { depth--; if (depth === 0) { objEnd = p; break; } }
}
if (objEnd < 0) { console.error('unterminated map'); process.exit(1); }

const objText = txt.slice(objStart, objEnd + 1);
console.log('map text size:', (objText.length / 1048576).toFixed(2), 'MB');

const map = new Function('return (' + objText + ')')();
const keys = Object.keys(map);
console.log('entries:', keys.length);

let written = 0, bytes = 0;
const sizes = [];
for (const key of keys) {
  const rel = key.replace(/^\.?\//, '');
  const target = path.join(outDir, rel);
  if (!target.startsWith(path.resolve(outDir))) {
    console.warn('skip suspicious key:', key);
    continue;
  }
  fs.mkdirSync(path.dirname(target), { recursive: true });

  const val = map[key];
  if (typeof val === 'string') {
    fs.writeFileSync(target, val, 'utf8');
    bytes += Buffer.byteLength(val);
    sizes.push([rel, Buffer.byteLength(val)]);
  } else if (Array.isArray(val) && typeof val[1] === 'string') {
    const buf = Buffer.from(val[1], 'base64');
    fs.writeFileSync(target, buf);
    bytes += buf.length;
    sizes.push([rel, buf.length]);
  } else {
    console.warn('unknown entry type, skipped:', key, typeof val);
    continue;
  }
  written++;
}

sizes.sort((a, b) => b[1] - a[1]);
console.log('written:', written, 'total:', (bytes / 1048576).toFixed(2), 'MB');
console.log('largest files:');
sizes.slice(0, 8).forEach(([k, v]) => console.log('  ' + (v / 1048576).toFixed(2).padStart(7) + ' MB  ' + k));

const html = txt.slice(0, objStart) + '{}' + txt.slice(objEnd + 1);
fs.writeFileSync(src, html, 'utf8');
console.log('rewritten index.html:', (Buffer.byteLength(html) / 1024).toFixed(1), 'KB');
