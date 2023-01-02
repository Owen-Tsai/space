import Layout from '@layouts/default-layout'
import { Abril_Fatface } from '@next/font/google'
import { getAllPosts, getAllGalleryImages } from '@lib/api'
import BlogCard from '@comps/blog-card'
import GalleryItem from '@comps/gallery-item'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { ArrowLeft, ArrowRight } from 'react-feather'

import type { BlogListItem, GalleryItem as GalleryListItem } from '@tds/blog'

import styles from '@css/blog.module.css'
import 'swiper/css'
import 'swiper/css/navigation'

const font = Abril_Fatface({
  weight: '400',
  subsets: ['latin']
})

type Props = {
  posts: BlogListItem[],
  images: GalleryListItem[]
}

export const getStaticProps = async () => {
  const posts = getAllPosts()
  const images = getAllGalleryImages()

  return {
    props: {
      posts,
      images
    }
  }
}

export default function Blog({ posts, images }: Props) {
  const blogs = posts.map((post) => (
    <BlogCard title={post.title} date={post.date} key={post.title} />
  ))
  const gallery = images.map((img) => (
    <SwiperSlide key={img.title}>
      <GalleryItem desc={img.desc} title={img.title} src={img.src} />
    </SwiperSlide>
  ))

  return (
    <>
      <Layout headerCls='sticky top-0 bg-slate-100 dark:bg-slate-900 z-50'>
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
                <Swiper
                  modules={[Navigation]}
                  loop
                  navigation={{
                    prevEl: '#prev',
                    nextEl: '#next'
                  }}
                  effect={'creative'}
                >
                  {gallery}
                </Swiper>

                <div className={styles['gallery-actions']}>
                  <button id='prev'>
                    <ArrowLeft />
                  </button>
                  <button id='next'>
                    <ArrowRight />
                  </button>
                </div>
              </section>
            </div>
          </aside>
        </div>
      </Layout>
    </>
  )
}
