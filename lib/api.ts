import fs from 'fs'
import { join } from 'path'
import galleryItems from '../_data/gallery/index.json'
import type { Blog, GalleryItem } from '@/tds/blog'
import parseMDXFile from './mdx'

const postDir = join(process.cwd(), '_data/blogs')

export const getPostSlugs = () => {
  return fs.readdirSync(postDir)
}

export const getPostBySlug = async (
  slug: string,
  includeContent?: boolean
): Promise<Partial<Blog>> => {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = join(postDir, `${realSlug}.mdx`)
  const fileContent = fs.readFileSync(fullPath, 'utf-8')
  const { content, meta, toc } = await parseMDXFile(fileContent)

  const res: Partial<Blog> = {
    toc,
    date: meta.date,
    title: meta.title,
    slug: realSlug
  }

  if (includeContent) {
    res.content = content
  }

  return res
}

export const getAllPosts = async () => {
  const pageSize = 8
  const slugs = getPostSlugs()
  const res: Partial<Blog>[][] = []
  const posts: Partial<Blog>[] = []

  for (let i = 0; i < slugs.length; i++) {
    posts.push(await getPostBySlug(slugs[i]))
  }
  posts.sort((a, b) => 
    (new Date(b.date!) as any) - (new Date(a.date!) as any)
  )

  for (let i = 0; i < Math.ceil(slugs.length / pageSize); i++) {
    const remains = posts.length - i * pageSize
    const page: Partial<Blog>[] = []
    for (let j = i * pageSize; j < Math.min(remains + pageSize * i, pageSize * (i + 1)); j++) {
      page.push(posts[j])
    }

    res.push(page)
  }

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