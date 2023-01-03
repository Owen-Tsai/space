import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Layout from '@layouts/default-layout'
import { serialize } from 'next-mdx-remote/serialize'
import { getPostBySlug, getPostSlugs } from '@lib/api'
import Article from '@comps/article'
import rehypeHighlight from 'rehype-highlight'
import 'highlight.js/styles/nord.css'

import type { MDXRemoteSerializeResult } from 'next-mdx-remote'

type RouteParam = {
  slug: string
}

type Props = {
  content: MDXRemoteSerializeResult,
  date: string,
  title: string,
  slug: string
}

export default function Story({ content, date, title, slug }: Props) {
  const router = useRouter()

  if (!router.isFallback && !slug) {
    return <ErrorPage statusCode={404} />
  }

  const titleMeta = `${title} | Space`

  return (
    <Layout headerCls='sticky top-0 bg-slate-50 dark:bg-slate-900 z-50'>
      <Head>
        <title>{titleMeta}</title>
      </Head>
      <div>
        <main>
          <div>
            <h1>{title}</h1>
            <span>{date}</span>
          </div>
          <Article content={content} />
        </main>
        <aside></aside>
      </div>
    </Layout>
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
  const { content, date, title, slug } = getPostBySlug(params.slug, [
    'content',
    'date',
    'title',
    'slug'
  ])

  const mdxSource = await serialize(content || '**no content in this file**', {
    mdxOptions: {
      development: false,
      rehypePlugins: [rehypeHighlight]
    },
  })

  return {
    props: {
      content: mdxSource,
      date,
      title,
      slug
    }
  }
}