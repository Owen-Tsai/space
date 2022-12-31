import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="zh-CN">
      <Head />
      <body className='bg-slate-100 dark:bg-slate-900'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
