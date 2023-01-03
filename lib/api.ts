import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import galleryItems from '../_data/gallery/index.json'
import type { Blog, GalleryItem } from '@tds/blog'

const postDir = join(process.cwd(), '_data/blogs')

export const getPostSlugs = () => {
  return fs.readdirSync(postDir)
}

export const getPostBySlug = (
  slug: string, fields: Array<keyof Blog>
): Partial<Blog> => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postDir, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const { data, content } = matter(fileContent)

  if (!data['title'] || !data['date']) {
    throw new Error(`[api] Post ${slug} lacks required front-matter attribute(s).`)
  }

  const res: Partial<Blog> = {}

  fields.forEach((field) => {
    if (field === 'content') {
      res.content = content
    } else if (field === 'slug') {
      res.slug = realSlug
    } else {
      res[field] = data[field]
    }
  })

  return res
}

export const getAllPosts = () => {
  const slugs = getPostSlugs()
  const res: Partial<Blog>[] = []
  slugs.forEach((slug) => {
    res.push(getPostBySlug(slug, [
      'title', 'date', 'slug'
    ]))
  })

  return res
}

export const getAllGalleryImages = () => {
  const res: GalleryItem[] = []
  galleryItems.forEach((item) => {
    const path = `/assets/gallery/${item.slug}`
    res.push({
      desc: item.desc,
      title: item.title,
      src: path
    })
  })

  return res
}