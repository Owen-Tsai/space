import { StaticImageData } from "next/dist/client/image"

export type Blog = {
  title: string
  date: string
  content: string
}

export type BlogListItem = {
  title: string
  date: string
}

export type GalleryItem = {
  title: string
  desc: string
  src: StaticImageData | string
}
