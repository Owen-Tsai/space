import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'
import '@/styles/code-highlight.scss'
import '@/styles/cursor.scss'

const Cursor = dynamic(() => import('../components/cursor'), {
  ssr: false
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const route = router.pathname

  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)

    window.localStorage.removeItem('cursor-last-pos')
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence mode='wait' initial={true}>
      <ThemeProvider attribute='class' defaultTheme='light' key={route}>
        <Component {...pageProps} />
        <Cursor />
      </ThemeProvider>
    </AnimatePresence>
  )
}
