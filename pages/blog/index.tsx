import Head from 'next/head'
import Layout from '@layouts/default-layout'
import { getAllPosts, getAllGalleryImages } from '@lib/api'
import Page from '@comps/post-page'
import GalleryItem from '@comps/gallery-item'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import { ArrowLeft, ArrowRight } from 'react-feather'
import Transition from '@layouts/index'
import { useState } from 'react'
import AnimatedText from '@comps/animated-text'
import { m } from 'framer-motion'

import type { Blog, GalleryItem as GalleryListItem } from '@tds/blog'

import styles from '@css/blog.module.css'
import 'swiper/css'
import 'swiper/css/navigation'

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
              <h1>
                <AnimatedText text='ARTICLES' />
              </h1>
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
                <h1>
                  <AnimatedText text='GALLERY' />
                </h1>
                <m.div
                  className={styles.carousel}
                  initial={{ x: '50%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{
                    type: 'spring',
                    damping: 24,
                    stiffness: 140,
                    duration: 1
                  }}
                >
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
                </m.div>
              </div>
            </section>
          </main>
        </Layout>
      </Transition>
    </>
  )
}
