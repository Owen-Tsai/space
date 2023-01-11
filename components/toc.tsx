import type { TOC } from '@tds/blog'
import styles from '@css/toc.module.scss'
import { m } from 'framer-motion'

export default function Toc ({ toc }: { toc: TOC }) {
  return (
    <m.nav
      className={styles.nav}
      initial={{ x: 24, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        duration: 0.25,
        delay: 1
      }}
    >
      <ul>
        {
          toc && toc.map((entry) => (
            <li key={entry.url} className={styles[`depth-${entry.depth}`]}>
              <a href={entry.url}>{entry.value}</a>
            </li>
          ))
        }
      </ul>
    </m.nav>
  )
}