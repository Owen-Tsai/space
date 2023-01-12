import { m } from 'framer-motion'
import { Abril_Fatface } from '@next/font/google'

const displayFont = Abril_Fatface({
  weight: ['400'],
  subsets: ['latin'],
  display: 'swap'
})

export default function AnimatedText (
  { text, className }: { text: string, className?: string }
) {
  const chars = text.split('')

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      }
    }
  }

  const variants = {
    hidden: {
      y: "60%",
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
    },
    visible: {
      y: 0,
      overflow: 'visible',
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 1 }
    }
  }

  return (
    <m.span
      className={className}
      initial='hidden'
      animate='visible'
      variants={container}
      style={{ display: 'inline-block', ...displayFont.style }}
    >
      {
        chars.map((char, idx) => (
          <m.span
            key={idx}
            style={{ display: 'inline-block' }}
            variants={variants}
          >{char}</m.span>
        ))
      }
    </m.span>
  )
}