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
    video?: {
      url: string | null
    }
  }[]
}

interface ItemProps {
  work: {
    url: string
    title: string
    image: {
      fluid: FluidObject | FluidObject[]
    }
    video?: {
      url: string | null
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
      {work.video && work.video.url ? (
        <video autoPlay muted loop playsInline src={work.video.url}></video>
      ) : (
        <Img fluid={work.image.fluid} />
      )}

      {/* desktop mask only visible on mouseover */}
      {maskVisible && (
        <div className='image-gallery__item__mask d-lg-flex'>
          <h2 className='text-center'>{work.title}</h2>
        </div>
      )}

      {/* mobile mask always visble */}
      <div className='image-gallery__item__mask d-flex d-lg-none'>
        <h2 className='text-center'>{work.title}</h2>
      </div>
    </Link>
  )
}

const ImageGallery = ({ items }: Props) => {
  return (
    <div className='image-gallery col-lg-9 offset-lg-2'>
      {items.map((work, i) => (
        <GalleryItem key={i} work={work} />
      ))}
    </div>
  )
}

export default ImageGallery
