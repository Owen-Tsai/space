import Link from 'next/link'
import type { Blog } from'@/tds/blog'
import styles from '@/styles/blog-card.module.css'

export default function BlogCard(props: Partial<Blog>) {
  if (!props.slug) {
    throw new Error('[]')
  }
  return (
    <Link className={styles.card} href={`/blog/${props.slug}`} as={`/blog/${props.slug}`}>
      <h2>{props.title}</h2>
      <span>{props.date}</span>
    </Link>
  )
}