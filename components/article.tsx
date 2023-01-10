import { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import styles from '@css/article.module.scss'
import { JetBrains_Mono } from '@next/font/google'
import { m } from 'framer-motion'

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
  { content }: { content: string }
) {
  const Component = useMemo(() => getMDXComponent(content), [content])
  return (
    <>
      <style jsx global>{`
        article code {
          font-family: ${codeFont.style.fontFamily};
          font-weight: ${codeFont.style.fontWeight};
        }
      `}</style>
      <m.article
        className={styles.story}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'tween', duration: 0.5, delay: 1.2 }}
      >
        <Component components={components} />
      </m.article>
    </>
  )
}