def format_stable_diffusion_parameters(metadata):
  """
  画像から取得したstable diffusionのパラメータを整形する
  """
  formatted_params = {}
  
  parameters_str = metadata['parameters']
  prompt_parts = parameters_str.split("Negative prompt:")
  
  if len(prompt_parts) > 0:
      formatted_params["prompt"] = prompt_parts[0].strip()
  
  if len(prompt_parts) > 1:
      neg_and_params = prompt_parts[1].strip()
      neg_parts = neg_and_params.split("\n", 1)
      
      formatted_params["negative_prompt"] = neg_parts[0].strip()
      
      if len(neg_parts) > 1:
          params_text = neg_parts[1].strip()
          
          param_pairs = params_text.split(", ")
          for pair in param_pairs:
              if ":" in pair:
                  key, value = pair.split(":", 1)
                  formatted_params[key.strip()] = value.strip()

  for key in formatted_params.keys():
      if key in ["Steps", "CFG scale", "Seed", "Size"]:
          # 数値に変換
          try:
              if "." in str(formatted_params[key]):
                  formatted_params[key] = float(formatted_params[key])
              else:
                  formatted_params[key] = int(formatted_params[key])
          except (ValueError, TypeError):
              pass
  
  # サイズを幅と高さに分割する
  if "Size" in formatted_params:
      size_str = str(formatted_params["Size"])
      if "x" in size_str:
          width, height = size_str.split("x", 1)
          try:
              formatted_params["width"] = int(width)
              formatted_params["height"] = int(height)
          except ValueError:
              pass
          
  formatted_params["acme_image_name"] = metadata["acme_image_name"]
  formatted_params["acme_image_path"] = metadata["acme_image_path"]
  return formatted_params