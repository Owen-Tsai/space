import Link from 'next/link'
import Image from 'next/image'
import logo from '@assets/app/logo.svg'
import logoWhite from '@assets/app/logo-white.svg'
import styles from '@css/header.module.css'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import ThemeSwitch from './theme-switch'
import type { Props } from '@tds/header'

export default function Header(props: Props) {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const renderedLogo = theme === 'dark'
    ? <Image src={logoWhite} alt='Site Logo' />
    : <Image src={logo} alt='Site Logo' />

  return (
    <header>
      <div className={styles.header}>
        <div className={styles['logo-wrapper']}>
          {renderedLogo}
        </div>
        
        <ThemeSwitch cls='md:hidden' />
        <div className={styles.navs}>
          <Link href='/'>HOME</Link>
          <Link href='/blog'>BLOG</Link>
          <Link href='/about'>ABOUT</Link>
        </div>
      </div>
      <div className={styles.toolbar}>
        <div className='flex items-center justify-between px-6'>
          <div className='text-slate-500'>
            {props.children}
          </div>
          <ThemeSwitch cls='!bg-transparent !dark:bg-transparent' />
        </div>
      </div>
    </header>
  )
}