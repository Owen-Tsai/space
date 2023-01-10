import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '@layouts/default-layout'
import Transition from '@layouts/index'
import { getPostBySlug, getPostSlugs } from '@lib/api'
import { m, type AnimationProps } from 'framer-motion'
import Toc from '@comps/toc'
import Article from '@comps/article'
import styles from '@css/blog-content.module.css'
import type { Blog } from '@tds/blog'

type RouteParam = {
  slug: string
}

export default function Story({ content, date, title, slug, toc }: Blog) {
  const router = useRouter()

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  const titleMeta = `${title} | Space`

  const transitionProps: AnimationProps['transition'] = {
    type: 'tween',
    duration: 0.5,
    delay: 0.5
  }

  return (
    <Transition>
      <Layout headerCls='sticky top-0 bg-gray-50 dark:bg-gray-900 z-50'>
        <Head>
          <title>{titleMeta}</title>
        </Head>
        <div className={styles.page}>
          <main className={styles.main}>
            <div className={styles.title}>
              <m.h1
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={transitionProps}
              >{title}</m.h1>
              <m.span
                initial={{ y: 24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...transitionProps, delay: 0.8 }}
              >{date}</m.span>
            </div>
            <Article content={content} />
          </main>
          <aside className={`${styles.aside} story-toc-aside`}>
            <Toc toc={toc!} />
          </aside>
        </div>
      </Layout>
    </Transition>
  )
}

export const getStaticPaths = async () => {
  const slugs = getPostSlugs()

  const paths = slugs.map(
    (slug) => slug.replace(/\.mdx$/, '')
  ).map(
    (slug) => ({ params: { slug }})
  )

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }: { params: RouteParam }) => {
  const { content, date, title, slug, toc } = await getPostBySlug(params.slug, true)

  return {
    props: {
      content,
      date,
      title,
      slug,
      toc
    }
  }
}