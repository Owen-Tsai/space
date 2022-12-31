import Link from 'next/link'
import type { Blog, BlogListItem } from'@tds/blog'

export default function BlogCard(props: BlogListItem) {
  return (
    <Link className='bg-slate-200 dark:bg-slate-700' href='/'>
      <h2 className='text-2xl text-inherit'>{props.title}</h2>
    </Link>
  )
}