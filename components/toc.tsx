import type { TOC } from '@tds/blog'
import styles from '@css/toc.module.scss'

export default function Toc ({ toc }: { toc: TOC }) {
  return (
    <nav className={styles.nav}>
      <ul>
        {
          toc && toc.map((entry) => (
            <li key={entry.url} className={styles[`depth-${entry.depth}`]}>
              <a href={entry.url}>{entry.value}</a>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}