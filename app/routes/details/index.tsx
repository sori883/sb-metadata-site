import { createRoute } from 'honox/factory'
import { findMetadata } from '../../tools/readMetadatas';
import { List } from '../../component/list';

export default createRoute((c) => {
  const title = "Stable Diffusion Details"
  const filename = c.req.query('name') || '';
  const metadata = findMetadata(filename)

  return c.render(
    <main class='py-8 px-8 text-center grid grid-cols-3'>
      <title>{ title }</title>

      <div class='col-span-2 flex flex-col items-center'>
        <img src={metadata.acme_image_path} class="h-220 w-auto" />
      </div>
      <div>
        <List metadata={metadata} />
      </div>
    </main>  
  )
})
  