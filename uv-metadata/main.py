from tools.list_images import list_images
from tools.save_json import save_json
from domain.extract_metadata import extract_png_metadata
from domain.format_stablediffustion_params import format_stable_diffusion_parameters


if __name__ == "__main__":
  images = list_images("../public/images")  

  formatted_metadatas = []
  for image in images:
    metadata = extract_png_metadata(image)
    formatted_metadata = format_stable_diffusion_parameters(metadata)
    formatted_metadatas.append(formatted_metadata)
    
  save_json(formatted_metadatas, "../metadata.json")