import { StaticImageData } from "next/dist/client/image"

export type Blog = {
  title: string
  date: string
  content: string
  slug: string
  toc?: TOC
}

export type GalleryItem = {
  title: string
  desc: string
  src: StaticImageData | string
}

export type TOC = Array<
  {
    url: string
    value: string
    depth: number
  }
>
