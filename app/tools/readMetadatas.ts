import metadatas from '../../metadata.json';

export type Metadata = {
  prompt: string;
  negative_prompt: string;
  Steps: number;
  Sampler: string;
  'Schedule type': string;
  'CFG scale': number;
  Seed: number;
  Size: string;
  'Model hash': string;
  Model: string;
  'Denoising strength': string;
  'Hires Module 1': string;
  'Hires CFG Scale': string;
  'Hires upscale': string;
  'Hires upscaler': string;
  'Lora hashes': string;
  Version: string;
  width: number;
  height: number;
  acme_image_name: string;
  acme_image_path: string;
}

// 全メタデータを取得
export function readMetadatas() {
  return metadatas as Metadata[];
}

// メタデータを検索
export function findMetadata(filename: string) {
  const data = readMetadatas();
  return data.filter(item => item.acme_image_name === filename)[0];
}