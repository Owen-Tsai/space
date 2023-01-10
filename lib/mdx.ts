import { join } from 'path'
import { bundleMDX } from 'mdx-bundler'
import type { TOC } from '@tds/blog'

// remark plugins
import remarkGfm from 'remark-gfm'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkTocHeadings from './remark-toc-headings'

// rehype plugins
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrismPlus from 'rehype-prism-plus'
import rehypePresetMinify from 'rehype-preset-minify'
import { writeFileSync } from 'fs-extra'

const root = process.cwd()

const parseMDXFile = async (source: string) => {
  const toc: TOC = []

  const { code, frontmatter } = await bundleMDX({
    source,
    cwd: join(root, 'components/exposed'),
    mdxOptions: (options, frontmatter) => {
      options.remarkPlugins = [
        ...(options.remarkPlugins || []),
        [remarkTocHeadings, {
          exportRef: toc
        }],
        remarkGfm,
        remarkUnwrapImages
      ]

      options.rehypePlugins = [
        ...(options.rehypePlugins || []),
        rehypeAutolinkHeadings,
        rehypePresetMinify,
        rehypePrismPlus,
        rehypeSlug
      ]

      return options
    }
  })

  return {
    content: code,
    toc,
    meta: {
      title: frontmatter['title'],
      date: frontmatter['date']
    }
  }
}

export default parseMDXFile