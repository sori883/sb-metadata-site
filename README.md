# セットアップ
1. uv
```
cd ./uv-metadata
uv sync
```

2. node
```
pnpm i
```

# 使い方
1. public/imagesに画像を入れる
2. `uv run main.py`
3. `pnpm dev`

# パッケージ
- uv-metadata
  - public/imagesからStable Diffusionのメタデータを取得
    - ./metadata.jsonが生成される
- node
  - ./metadata.jsonの色付け
