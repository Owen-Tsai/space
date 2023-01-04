import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import type { GalleryItem } from '@tds/blog'
import 'react-medium-image-zoom/dist/styles.css'

export default function GalleryItem(props: GalleryItem) {
  return (
    <>
      <Zoom>
        <div className='relative h-64'>
          <Image fill src={props.src} alt={props.title} style={{
            objectFit: 'cover'
          }} />
        </div>
      </Zoom>
      <div className='text-gray-800 dark:text-gray-50 my-3'>
        <div className='text-2xl font-serif font-bold'>{props.title}</div>
        <span className='text-gray-400 pl-4 italic'>&mdash; 摄于{props.desc}</span>
      </div>
    </>
  )
}