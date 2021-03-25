import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment workFragmentFull on PrismicWork {
    url
    uid
    tags
    data {
      title {
        html
        text
      }
      text {
        html
        text
      }
      images {
        caption
        image {
          alt
          fluid {
            ...GatsbyPrismicImageFluid
          }
        }
      }
      year
    }
  }
`
