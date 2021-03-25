import React from 'react'
import { graphql } from 'gatsby'
import '@src/prismic/fragments/work'
import { workResolver } from '@src/utils/dataResolvers'
import Img from 'gatsby-image'

const Work = ({ data }: { data: any }) => {
  const work = workResolver(data.prismicWork)

  return (
    <>
      <div className='work col-lg-8 offset-lg-2'>
        <div className='d-flex justify-content-between mb-3'>
          <h1>{work.title.text}</h1>
          <p>{work.year}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: work.text.html }} />

        <div>
          {work.images.map(image => (
            <div className='mt-4'>
              <Img fluid={image.fluid} alt={image.alt} />
              <p className='mt-2'>{image.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Work

export const query = graphql`
  query($id: String) {
    prismicWork(id: { eq: $id }) {
      ...workFragmentFull
    }
  }
`
