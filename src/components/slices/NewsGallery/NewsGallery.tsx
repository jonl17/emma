import Img, { FluidObject } from 'gatsby-image'
import React from 'react'

interface Props {
  items: {
    image: {
      alt: string
      fluid: FluidObject
    }
    caption: {
      html: string
    }
  }[]
}

const NewsGallery = ({ items }: Props) => {
  return (
    <div className='col-lg-8 offset-lg-2'>
      {items.map((item, i) => (
        <div className='mb-5' key={i}>
          <Img fluid={item.image.fluid} />
          <div
            className='mt-3'
            dangerouslySetInnerHTML={{ __html: item.caption.html }}
          />
        </div>
      ))}
    </div>
  )
}

export default NewsGallery
