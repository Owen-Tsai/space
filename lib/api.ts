import fs from 'fs-extra'
import { join } from 'path'
import matter from 'gray-matter'
import type { Blog, BlogListItem } from '@tds/blog'

const postDir = join(process.cwd(), '_data/blogs')

export const getPostSlugs = async () => {
  return fs.readdir(postDir)
}

export const getPostBySlug = async (
  slug: string, short = true
): Promise<Blog | BlogListItem> => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(process.cwd(), `${realSlug}.mdx`)
  const fileContent = await fs.readFile(fullPath, 'utf-8')
  const { data, content } = matter(fileContent)

  if (!data['title'] || !data['date']) {
    throw new Error(`[api] Post ${slug} lacks required front-matter attribute(s).`)
  }

  const res = {
    title: data.title,
    date: data.date,
  }
  if (!short) {
    (res as Blog).content = content
  }

  return res
}

export const getAllPosts = () => {

}