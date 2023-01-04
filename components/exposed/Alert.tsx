import cn from 'classnames'
import styles from '@css/alert.module.css'

export default function Alert(
  { children, title, type = 'normal' }: {
    children: JSX.Element | JSX.Element[],
    title?: string,
    type: 'normal' | 'warning' | 'error'
  }
) {
  const header = title
    ? <div className='font-bold'>{title}</div>
    : undefined

  const typeCls = styles[`alert-${type}`]

  return (
    <div className={cn(styles.alert, typeCls)}>
      {header}
      <div className={styles.content}>{children}</div>
    </div>
  )
}