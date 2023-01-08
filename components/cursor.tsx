import { useEffect, useState, useRef } from 'react'
import { m, LazyMotion, domAnimation } from 'framer-motion'
import { isMobileDevice } from '@lib/utils'

export default function Cursor () {
  const [position, setPos] = useState({
    x: -100, y: -100
  })
  const [active, setActive] = useState(false)

  const cursorRef = useRef<HTMLDivElement>(null)

  const interactivables = useRef<Element[]>([])

  const onMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e
    setPos({ x: clientX, y: clientY })
    window.localStorage.setItem('cursor-last-pos', `${clientX},${clientY}`)
  }

  useEffect(() => {
    const lastPos = window.localStorage.getItem('cursor-last-pos')
    if (lastPos) {
      const [x, y] = lastPos.split(',')
      setPos({ x: parseFloat(x), y: parseFloat(y) })
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove)

    return () => {
      document.removeEventListener('mouseleave', onMouseMove)
    }
  }, [])

  useEffect(() => {
    const size = active ? '120px' : '20px'
    cursorRef.current!.style.width = size
    cursorRef.current!.style.height = size
  }, [active])

  useEffect(() => {
    interactivables.current = [
      ...Array.from(document.querySelectorAll('a, button'))
    ]

    const setActive = (active: boolean) => {
      const size = active ? '120px' : '20px'
      if (cursorRef.current) {
        cursorRef.current.style.width = size
        cursorRef.current.style.height = size
      }
    }
  
    const onMouseIn = () => {
      setActive(true)
    }
  
    const onMouseOut = () => {
      setActive(false)
    }

    interactivables.current.forEach((el) => {
      el.addEventListener('mouseenter', onMouseIn)
      el.addEventListener('mouseleave', onMouseOut)
    })

    return () => {
      interactivables.current.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseIn)
        el.removeEventListener('mouseleave', onMouseOut)
      })
    }
  })

  if (isMobileDevice()) {
    return null
  }

  return (
    <div className='custom-cursor-wrapper'>
      <LazyMotion features={domAnimation}>
        <m.div
          className='custom-cursor'
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
          ref={cursorRef}
        />
        <m.div
          className='custom-cursor-ring'
          animate={{ left: position.x, top: position.y }}
          transition={{
            type: 'spring',
            damping: 20,
            stiffness: 200
          }}
        />
      </LazyMotion>
    </div>
  )
}
