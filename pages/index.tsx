import Head from 'next/head'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import cn from 'classnames'
import Header from '@/comps/header'
import { useState, useEffect } from 'react'
import { Heart } from 'react-feather'
import Transition from '@/layouts/index'
import AnimatedText from '@/comps/animated-text'
import styles from '@/styles/Home.module.css'

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const themeClsName = theme === 'dark' ? styles['page-dark'] : styles['page-light']

  return (
    <>
      <Head>
        <title>Space</title>
        <meta name="description" content="Yet another web debeloper's blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          body {
            padding: 0;
            margin: 0;
          }
          `}</style>
      </Head>
      <Transition>
        <div className={cn(styles.page, themeClsName)}>
          <Header />
          <main className={styles.main}>
            <div className={styles.container}>
              <h1>
                <AnimatedText text='Yet&nbsp;Another' />
                <br />
                <AnimatedText text='Web' />
                <br className='lg:hidden' />
                <span className='hidden lg:inline'>&nbsp;</span>
                <AnimatedText text='Developer.' />
              </h1>
            </div>
            <footer className={styles.footer}>
              <div className='flex items-center'>
                Created with
                <Heart color='rgb(234,85,74)' size='18' fill='rgb(234,85,74)' className='mx-2' />
                by <Link href='https://www.github.com/Owen-Tsai/' target='_blank' className='ml-1 font-bold'>Owen</Link>
              </div>
            </footer>
          </main>
          <div className={cn(styles.actions, 'fixed w-full left-0 bottom-6')}>
            <Link href='/blog'>BLOG</Link>
            <Link href='/about'>ABOUT</Link>
          </div>
        </div>
      </Transition>
    </>
  )
}
