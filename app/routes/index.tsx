import { createRoute } from 'honox/factory'
import { readMetadatas } from '../tools/readMetadatas';
import { Card } from '../component/card'

export default createRoute((c) => {
  const title = "Stable Diffusion List"
  const metadatas = readMetadatas()

  return c.render(
    <main class='py-8 px-4 text-center'>
      <title>{ title }</title>


      <div class='grid grid-cols-4 gap-4 items-center justify-items-center'>
        {metadatas.map((metadata) => (<Card metadata={metadata} />))}
      </div>
    </main>  
  )
})
