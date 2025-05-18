import { Metadata } from '../tools/readMetadatas';

export function List(props: {metadata: Metadata}) {
  return (
    <ul role="list" class="divide-y divide-gray-100 bg-slate-800 text-white p-4 rounded-lg">
      <li class="flex justify-between flex-col gap-x-6 py-5">
        <div class="text-left mb-4">
          <p class="font-bold">プロンプト</p>
          <p class="mt-1 text-xs/5">
            {props.metadata.prompt}
          </p>
        </div>

        <div class="text-left mb-4">
          <p class="font-bold">ネガティブプロンプト</p>
          <p class="mt-1 text-xs/5">
            {props.metadata.negative_prompt}
          </p>
        </div>
        <div class="text-left mb-4">  
          <p class="font-bold">モデル</p>
          <div class="mt-1 text-md/5">
            <ul>
              <li>model: {props.metadata.Model}</li>
            </ul>
          </div>
        </div>
        <div class="text-left mb-4">  
          <p class="font-bold">サンプリング</p>
          <div class="mt-1 text-md/5">
            <ul>
              <li>sampler: {props.metadata.Sampler}</li>
              <li>schedule type: {props.metadata['Schedule type']}</li>
              <li>step: {props.metadata.Steps}</li>
              <li>cfg scale: {props.metadata['CFG scale']}</li>
              <li>seed: {props.metadata.Seed}</li>
              <li>size: {props.metadata.Size}</li>
            </ul>
          </div>
        </div>
        <div class="text-left mb-4">  
          <p class="font-bold">Hires</p>
          <div class="mt-1 text-md/5">
            <ul>
              <li>Hires upscaler: {props.metadata['Hires upscaler']}</li>
              <li>Hires upscale: {props.metadata['Hires upscale']}</li>
              <li>Hires Module: {props.metadata['Hires Module 1']}</li>
              <li>Hires CFG Scale: {props.metadata['Hires CFG Scale']}</li>
            </ul>
          </div>
        </div>
        <div class="text-left mb-4">  
          <p class="font-bold">未実装</p>
          <p>Lora取るの辛いのでプロンプトで見る</p>
        </div>
      </li>
    </ul>
  )
}