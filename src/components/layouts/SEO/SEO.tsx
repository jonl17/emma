import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const SEO = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          favicon
        }
      }
    }
  `)
  const { siteMetadata: meta } = data.site

  return (
    <Helmet>
      <title>{meta.title}</title>
      <link href={meta.favicon} type="image/png" rel="icon"></link>
    </Helmet>
  )
}

export default SEO
