import Layout from '@layouts/default-layout'
import { Abril_Fatface } from '@next/font/google'
import styles from '@css/blog.module.css'
import { getAllPosts } from '@lib/api'
import galleryImages from '../../_data/gallery/index'
import BlogCard from '@comps/blog-card'
import GalleryItem from '@comps/gallery-item'
import type { BlogListItem } from '@tds/blog'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const font = Abril_Fatface({
  weight: '400',
  subsets: ['latin']
})

type Props = {
  posts: BlogListItem[]
}

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: {
      posts
    }
  }
}

export default function Blog({ posts }: Props) {
  const blogs = posts.map((post) => (
    <BlogCard title={post.title} date={post.date} key={post.title} />
  ))
  const gallery = galleryImages.map((img) => (
    <SwiperSlide key={img.id}>
      <GalleryItem id={img.id} desc={img.desc} src={img.src} />
    </SwiperSlide>
  ))

  return (
    <>
      <Layout>
        <div className={styles.page}>
          <main className={styles.main}>
            <h1 style={font.style}>ARTICLES</h1>
            <section className={styles.list}>
              {blogs}
            </section>
          </main>
          <aside className={styles.aside}>
            <div className={styles.gallery}>
              <h1 style={font.style}>GALLERY</h1>
              <section className={styles.carousel}>
                <Swiper>
                  {gallery}
                </Swiper>
              </section>
            </div>
          </aside>
        </div>
      </Layout>
    </>
  )
}
