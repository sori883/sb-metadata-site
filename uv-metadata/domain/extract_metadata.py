import os
import PIL.Image # type: ignore

def extract_png_metadata(image_path):
  """
  画像からstable diffusionのパラメータを取得する
  """
  img = PIL.Image.open(image_path)
  
  metadata = {}
  for key, value in img.info.items():
    # Stable Diffusionのメタデータはparametersに格納されているらしい
    if key == 'parameters':
      metadata['parameters'] = value
    else:
      metadata[key] = str(value)
  
  # 画像のパスをjson用に変更
  metadata['acme_image_name'] = str(os.path.basename(image_path))
  metadata['acme_image_path'] = "images/" + str(os.path.basename(image_path))
  return metadata