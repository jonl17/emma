import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          favicon
          description
          image
          keywords
        }
      }
    }
  `)
  const { siteMetadata: meta } = data.site

  return (
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />

      <title>{meta.title}</title>
      <link rel='icon' href={meta.favicon.url} type='image/png' />

      <meta property='description' content={meta.description} />

      <meta property='og:image' content={meta.image} />
      <meta property='og:description' content={meta.description} />
      <meta name='twitter:description' content={meta.description} />
      <meta name='twitter:image' content={meta.image} />
      <meta name='twitter:card' content='summary_large_image' />
    </Helmet>
  )
}

export default SEO
