import React, { useState } from 'react'
import Img, { FluidObject } from 'gatsby-image'
import { Link } from 'gatsby'

interface Props {
  items: {
    image: {
      fluid: FluidObject | FluidObject[]
    }
    url: string
    title: string
  }[]
}

interface ItemProps {
  work: {
    url: string
    title: string
    image: {
      fluid: FluidObject | FluidObject[]
    }
  }
}

const GalleryItem = ({ work }: ItemProps) => {
  const [maskVisible, setMaskVisible] = useState(false)
  return (
    <Link
      to={work.url}
      className='image-gallery__item'
      onMouseEnter={() => setMaskVisible(true)}
      onMouseLeave={() => setMaskVisible(false)}
    >
      <Img fluid={work.image.fluid} />
      {maskVisible && (
        <div className='image-gallery__item__mask'>
          <h2>{work.title}</h2>
        </div>
      )}
    </Link>
  )
}

const ImageGallery = ({ items }: Props) => {
  return (
    <div className='image-gallery'>
      {items.map((work, i) => (
        <GalleryItem key={i} work={work} />
      ))}
    </div>
  )
}

export default ImageGallery
