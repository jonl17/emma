import { graphql } from 'gatsby'

export const fragment = graphql`
  fragment pageFragmentFull on PrismicPage {
    url
    id
    prismicId
    uid
    lang
    tags
    type
    data {
      body {
        ... on PrismicPageBodyText {
          ...textSliceFragment
        }
        ... on PrismicPageBodyNewsGallery {
          ...newsGallerySliceFragment
        }
        ... on PrismicPageBodyCvBlock {
          ...cvBlockSliceFragment
        }
        ... on PrismicPageBodyImageGallery {
          ...imageGallerySliceFragment
        }
      }
    }
  }

  fragment imageGallerySliceFragment on PrismicPageBodyImageGallery {
    slice_type
    items {
      link_to_work {
        document {
          ... on PrismicWork {
            url
            data {
              frontpage_image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
              frontpage_video {
                url
              }
              title {
                text
              }
            }
          }
        }
      }
    }
  }

  fragment cvBlockSliceFragment on PrismicPageBodyCvBlock {
    slice_type
    primary {
      name_of_block {
        html
        text
      }
    }
    items {
      year
      description {
        html
        text
      }
      on_going
    }
  }

  fragment newsGallerySliceFragment on PrismicPageBodyNewsGallery {
    slice_type
    items {
      image {
        fluid(maxHeight: 1000, maxWidth: 700) {
          ...GatsbyPrismicImageFluid
        }
        alt
      }
      caption {
        html
        text
      }
    }
  }

  fragment textSliceFragment on PrismicPageBodyText {
    slice_type
    primary {
      text {
        html
        text
      }
      artist_photo {
        url
        alt
      }
    }
  }
`
