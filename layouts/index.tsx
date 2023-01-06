import { m, domAnimation, LazyMotion } from 'framer-motion'

export default function Transition(
  { children }: { children: JSX.Element | JSX.Element[] }
) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0.2 }}
        transition={{
          type: 'spring',
          stiffness: 100,
          damping: 20
        }}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}