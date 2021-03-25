import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment navigationFragmentFull on PrismicNavigation {
    data {
      links {
        link {
          url
        }
        link_label
      }
    }
  }
`
