import { StaticImageData } from "next/dist/client/image"

export type Blog = {
  title: string
  date: string
  content: string
  slug: string
}

export type GalleryItem = {
  title: string
  desc: string
  src: StaticImageData | string
}
