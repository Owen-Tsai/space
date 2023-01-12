import styles from '@/styles/status-item.module.scss'
import gameIcon from '@/assets/app/game.png'
import workIcon from '@/assets/app/work.png'
import bookIcon from '@/assets/app/book.png'
import Image from 'next/image'
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
    ? bookIcon : type === 'games'
    ? gameIcon : workIcon

  return (
    <div className={styles.item}>
      <div className='flex items-end justify-between border-b border-gray-800 dark:border-gray-100'>
        <h2>{title}</h2>
        <Image src={icon} alt='' width={64} />
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