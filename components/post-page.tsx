import { Blog } from '@tds/blog'
import BlogCard from './blog-card'
import { m } from 'framer-motion'

export default function Page({ posts }: { posts: Partial<Blog>[] }) {
  const blogs = posts.map((post) => (
    <m.div
      key={post.slug}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        type: 'spring',
        damping: 40,
        stiffness: 120,
        delay: 0.15
      }}
    >
      <BlogCard title={post.title} date={post.date} slug={post.slug} />
    </m.div>
  ))

  return (
    <>
      {blogs}
    </>
  )
}