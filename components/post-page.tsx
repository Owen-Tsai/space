import { Blog } from '@tds/blog'
import BlogCard from './blog-card'

export default function Page({ posts }: { posts: Partial<Blog>[] }) {
  const blogs = posts.map((post) => (
    <BlogCard title={post.title} date={post.date} slug={post.slug} key={post.slug} />
  ))

  return (
    <>
      {blogs}
    </>
  )
}