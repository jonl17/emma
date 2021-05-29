import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon from './icon.png'
import image from './emma-share-image.jpg'

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
  `)
  const { siteMetadata: meta } = data.site

  console.log(meta)

  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>{meta.title}</title>
      <link rel='icon' href={favicon} type='image/png' />

      <meta property='description' content={meta.description} />

      <meta property='image' content={image} />
      <meta property='og:image' content={image} />
      <meta property='og:description' content={meta.description} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={image} />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default SEO
