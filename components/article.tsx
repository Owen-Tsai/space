import { MDXRemote } from 'next-mdx-remote'
import styles from '@css/article.module.css'
import type { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { JetBrains_Mono } from '@next/font/google'

const codeFont = JetBrains_Mono({
  weight: ['500']
})

import Zoom from 'react-medium-image-zoom'
import Alert from './exposed/Alert'
import 'react-medium-image-zoom/dist/styles.css'

const components = {
  // eslint-disable-next-line @next/next/no-img-element
  img: (props: any) => <Zoom><img {...props} alt={props.alt} /></Zoom>,
  Alert
}

export default function Article(
  { content }: { content: MDXRemoteSerializeResult }
) {
  return (
    <article className={styles.story}>
      <style jsx global>{`
        article code {
          font-family: ${codeFont.style.fontFamily};
          font-weight: ${codeFont.style.fontWeight};
        }
      `}</style>
      <MDXRemote {...content} components={components} />
    </article>
  )
}