"""Use Cocos bundle versions and file hashes for the environment shipped by the public site."""
import argparse
import hashlib
import json
from pathlib import Path


def write(path, value):
    path.write_text(json.dumps(value, ensure_ascii=False, separators=(',', ':')), encoding='utf8')


def version_file(path):
    digest = hashlib.sha256(path.read_bytes()).hexdigest()[:16]
    path.rename(path.with_name(f'{path.stem}.{digest}{path.suffix}'))
    return digest


def prepare_site(site, game, version):
    settings_path = site / 'src/settings.json'
    settings = json.loads(settings_path.read_text('utf8'))
    resources = site / 'assets/resources'
    config_path = resources / 'config.json'
    config = json.loads(config_path.read_text('utf8'))
    for key, (name, kind, *_) in config['paths'].items():
        asset_type = config['types'][kind]
        if not (name.startswith('environments/') or name in {'effects/depth-ground', 'effects/actor-state', 'effects/depth-foliage'}):
            continue
        if asset_type == 'cc.Texture2D':
            continue  # Stored in the shared import pack below.
        suffix = {'cc.ImageAsset': '.png', 'cc.EffectAsset': '.effect', 'cc.JsonAsset': '.json'}[asset_type]
        meta = game / 'cocos/assets/resources' / (name + suffix + '.meta')
        uid = json.loads(meta.read_text('utf8'))['uuid']
        for folder, ext in [('import', '.json')] + ([('native', '.webp')] if asset_type == 'cc.ImageAsset' else []):
            path = resources / folder / uid[:2] / (uid + ext)
            config['versions'][folder].extend([int(key), version_file(path)])
    for pack in config['packs']:
        path = resources / 'import' / pack[:2] / (pack + '.json')
        config['versions']['import'].extend([pack, version_file(path)])
    write(config_path, config)
    for bundle in ('main', 'resources'):
        root = site / 'assets' / bundle
        settings['assets']['bundleVers'][bundle] = version
        for filename in ('index.js', 'config.json'):
            path = root / filename
            path.rename(root / f'{path.stem}.{version}{path.suffix}')
    write(settings_path, settings)


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('site', type=Path)
    parser.add_argument('game', type=Path)
    parser.add_argument('version')
    args = parser.parse_args()
    prepare_site(args.site, args.game, args.version)
