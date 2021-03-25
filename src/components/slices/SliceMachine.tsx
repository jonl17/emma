import React from 'react'
import Text from './Text'
import ImageGallery from './ImageGallery'
import NewsGallery from './NewsGallery'

type Props = {
  slice: any
}

const getProps = (slice: any) => {
  switch (slice.slice_type) {
    case 'text':
      return {
        html: slice.primary.text.html,
      }
    case 'image_gallery':
      return {
        items: slice.items
          .filter((item: any) => item.link_to_work.document)
          .map((item: any) => {
            const { url, data } = item.link_to_work.document
            return {
              image: data.frontpage_image,
              url,
              title: data.title.text,
            }
          }),
      }
    case 'news_gallery':
      return {
        items: slice.items.map((item: any) => {
          return {
            ...item,
          }
        }),
      }
    default:
      null
  }
}

const SliceMapping = ({ slice }: Props) => {
  const slices: { [key: string]: React.ElementType } = {
    text: Text,
    image_gallery: ImageGallery,
    news_gallery: NewsGallery,
  }

  const Cmp = slices[slice.slice_type]

  if (!Cmp) {
    console.log('error loading slice_type: ' + slice.slice_type)
    return null
  }

  const props = getProps(slice)

  return <Cmp {...props} />
}

export default SliceMapping
