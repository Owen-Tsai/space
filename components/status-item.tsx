import styles from '@/styles/status-item.module.scss'
import { m } from 'framer-motion'

type Item = {
  name: string
  desc?: string
}

type Props = {
  items: Item[]
  type: 'games' | 'books' | 'work'
}

export default function StatusItem ({ items, type }: Props) {
  const title = type === 'books'
    ? '最近正在读'
    : type === 'games'
    ? '最近正在玩'
    : '最近正在做'

  const icon = type === 'books'
    ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2v-3H6.5a1.5 1.5 0 0 0 0 3H19zM10 4v8l3.5-2 3.5 2V4h-7z"/></svg>
    : type === 'games'
    ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M17 4a6 6 0 0 1 6 6v4a6 6 0 0 1-6 6H7a6 6 0 0 1-6-6v-4a6 6 0 0 1 6-6h10zm-7 5H8v2H6v2h1.999L8 15h2l-.001-2H12v-2h-2V9zm8 4h-2v2h2v-2zm-2-4h-2v2h2V9z"/></svg>
    : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm13.464 12.536L20 12l-3.536-3.536L15.05 9.88 17.172 12l-2.122 2.121 1.414 1.415zM6.828 12L8.95 9.879 7.536 8.464 4 12l3.536 3.536L8.95 14.12 6.828 12zm4.416 5l3.64-10h-2.128l-3.64 10h2.128z"/></svg>

  return (
    <div className={styles.item}>
      <div className='flex items-end justify-between border-b border-gray-800 dark:border-gray-100'>
        <h2>{title}</h2>
        <span>{icon}</span>
      </div>
      <ul>
        {
          items.map((item, i) => (
            <li
              key={item.name}
              className='overflow-hidden'
            >
              <m.div
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.45 }}
              >
                <div className={styles['item-name']}>{item.name}</div>
                <div className={styles['item-desc']}>{item.desc}</div>
              </m.div>
            </li>
          ))
        }
      </ul>
    </div>
  )
}