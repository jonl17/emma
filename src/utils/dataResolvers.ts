import { FluidObject } from 'gatsby-image'

interface PageInterface {
  id: string
  url: string
  uid: string
  prismicId: string
  tags: string[]
  data: {
    body: any[]
  }
}

export const pageResolver = (node: any): PageInterface => {
  return {
    ...node,
  }
}

interface NavigationInterface {
  links: {
    label: string
    url: string
  }[]
}

export const navigationResolver = (node: any): NavigationInterface => {
  return {
    links: node.data.links.map((l: any) => {
      return {
        label: l.link.url === '/' ? 'Works' : l.link_label,
        url: l.link.url,
      }
    }),
  }
}

export interface WorkInterface {
  url: string
  uid: string
  tags: string[]
  title: {
    html: string
    text: string
  }
  text: {
    html: string
    text: string
  }
  images: {
    fluid: FluidObject
    alt: string
    caption: string
  }[]
  year: string
}

export const workResolver = (node: any): WorkInterface => {
  return {
    url: node.url,
    uid: node.uid,
    tags: node.tags,
    title: node.data.title,
    text: node.data.text,
    year: node.data.year,
    images: node.data.images.map((x: any) => {
      return {
        fluid: x.image.fluid,
        alt: x.image.alt,
        caption: x.caption,
      }
    }),
  }
}
