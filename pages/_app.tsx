import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, useTheme } from 'next-themes'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import '@css/code-highlight.scss'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const route = router.pathname

  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const color: string = theme === 'light'
    ? '241, 245, 249'
    : '15, 23, 42'

  return (
    <AnimatePresence mode='wait' initial={true}>
      <ThemeProvider attribute='class' defaultTheme='light' key={route}>
          <Component {...pageProps} />
      </ThemeProvider>
    </AnimatePresence>
  )
}
