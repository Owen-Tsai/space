import Head from 'next/head'
import Layout from '@layouts/default-layout'
import { Abril_Fatface } from '@next/font/google'
import { getAllPosts, getAllGalleryImages } from '@lib/api'
import Page from '@comps/post-page'
import GalleryItem from '@comps/gallery-item'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Transition from '@layouts/index'
import { useState } from 'react'

import type { Blog, GalleryItem as GalleryListItem } from '@tds/blog'

import styles from '@css/blog.module.css'
import 'swiper/css'
import 'swiper/css/navigation'

const font = Abril_Fatface({
  weight: '400',
  subsets: ['latin']
})

type Props = {
  posts: Partial<Blog>[][],
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
  const [page, setPage] = useState(1)

  const postsOnPage = posts[page - 1]

  const gallery = images.map((img) => (
    <SwiperSlide key={img.title}>
      <GalleryItem desc={img.desc} title={img.title} src={img.src} />
    </SwiperSlide>
  ))

  const toPrevPage = () => {
    page - 1 > 0 && setPage(page - 1)
  }

  const toNextPage = () => {
    page + 1 <= posts.length && setPage(page + 1)
  }

  return (
    <>
      <Transition>
        <Head>
          <title>Blog | Space</title>
        </Head>
        <Layout headerCls='sticky top-0 bg-gray-50 dark:bg-gray-900 z-50'>
          <main className={styles.page}>
            <section className={styles.main}>
              <h1 style={font.style}>ARTICLES</h1>
              <div className={styles.list}>
                <Page posts={postsOnPage} />
              </div>
              {
                posts.length > 1 &&
                <div className={styles.pagination}>
                  <button onClick={() => toPrevPage()}>
                    <ArrowLeft />
                  </button>
                  <span className='text-lg mx-2'>{page}/{posts.length}</span>
                  <button onClick={() => toNextPage()}>
                    <ArrowRight />
                  </button>
                </div>
              }
            </section>
            <section className={styles.aside}>
              <div className={styles.gallery}>
                <h1 style={font.style}>GALLERY</h1>
                <div className={styles.carousel}>
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
                </div>
              </div>
            </section>
          </main>
        </Layout>
      </Transition>
    </>
  )
}
