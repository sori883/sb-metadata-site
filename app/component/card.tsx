import { Metadata } from '../tools/readMetadatas';

export function Card(props: {metadata: Metadata}) {
  return (
    <a href={`/details?name=${props.metadata.acme_image_name}`} class='block max-w-sm rounded overflow-hidden shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-2'>
      <div class='max-w-sm rounded overflow-hidden shadow-lg'>
        <img class='w-full' src={props.metadata.acme_image_path} alt='Sunset in the mountains' />
        <div class='px-6 pt-4 pb-2 bg-white'>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
            Model: {props.metadata.Model}
          </span>
        </div>
      </div>
    </a>  
  )
}