import json

def save_json(metadata, output_json_path):
  """
  JSONで保存する
  """
  with open(output_json_path, 'w', encoding='utf-8') as json_file:
      json.dump(metadata, json_file, ensure_ascii=False, indent=4)