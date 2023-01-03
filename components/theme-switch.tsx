import { Sun, Moon } from 'react-feather'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import cn from 'classnames'

type PropsType = {
  size?: number
  cls?: string
}

export default function ThemeSwitch({ size = 20, cls }: PropsType) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const icon = theme === 'dark'
    ? <Sun size={size} className='text-slate-50' />
    : <Moon size={size} className='text-slate-800' />

  return (
    <button
      className={cn(cls, 'inline-flex items-center justify-center p-2 bg-slate-200 dark:bg-slate-900 rounded')}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {icon}
    </button>
  )
}