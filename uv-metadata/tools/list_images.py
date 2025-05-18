import os
from pathlib import Path

def list_images(directory, extensions=('.png')):
  """
  指定したディレクトリとそのサブディレクトリ内のすべての画像ファイルを再帰的に取得
  """
  images = []
  for root, dirs, files in os.walk(directory):
    for file in files:
      if file.lower().endswith(extensions):
        abs_path = os.path.join(directory, file)
        ## パス変換しておく
        images.append(str(abs_path).replace('\\', '/'))

  return images