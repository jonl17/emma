import React from 'react'
import { graphql } from 'gatsby'
import '@src/prismic/fragments/work'
import { workResolver } from '@src/utils/dataResolvers'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import linkResolver from '@src/utils/linkResolver'

const Work = ({ data, pageContext }: { data: any; pageContext: any }) => {
  const work = workResolver(data.prismicWork)
  console.log(pageContext)
  return (
    <>
      <Helmet>
        <title>{work.title.text} | Emma Heiðarsdóttir</title>
      </Helmet>
      <div className='work col-lg-8 offset-lg-2'>
        <div className='d-flex justify-content-between mb-1 mb-lg-3'>
          <h1 className='d-none d-lg-block'>{work.title.text}</h1>
          <h2 className='d-block d-lg-none'>{work.title.text}</h2>
          <p>{work.year}</p>
        </div>
        <div dangerouslySetInnerHTML={{ __html: work.text.html }} />

        <div>
          {work.images.map((image, i) => (
            <div key={i} className='mt-2 mt-lg-4'>
              <Img fluid={image.fluid} alt={image.alt} />
              <p className='mt-2'>{image.caption}</p>
            </div>
          ))}
        </div>
        <div className='d-flex justify-content-between my-3 my-lg-4'>
          {pageContext.previous && (
            <Link to={pageContext.previous.url}>{'<< Previous'}</Link>
          )}
          {pageContext.next && (
            <Link to={pageContext.next.url}>{'Next >>'}</Link>
          )}
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
