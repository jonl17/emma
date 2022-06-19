import { FluidObject } from 'gatsby-image'
import React from 'react'
import Img from 'gatsby-image'

type Props = {
  html: string
  artistPhoto: { url: string; alt: string; fluid: FluidObject }
}

const Text = ({ html, artistPhoto }: Props) => {
  console.log(artistPhoto)
  return (
    <div className='col-lg-8 offset-lg-2'>
      <div className='text mb-2' dangerouslySetInnerHTML={{ __html: html }} />
      <Img
        className='w-100 h-100 mb-2'
        fluid={artistPhoto.fluid}
        alt={artistPhoto.alt ?? 'Artist photo'}
      />
      <p>{artistPhoto.alt}</p>
    </div>
  )
}

export default Text
