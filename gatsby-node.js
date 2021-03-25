const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const pages = await graphql(`
    {
      allPrismicPage {
        nodes {
          url
          id
          prismicId
          uid
          lang
          tags
          type
          data {
            title {
              html
              text
            }
          }
        }
      }
    }
  `)

  const works = await graphql(`
    {
      allPrismicWork {
        edges {
          node {
            url
            id
            prismicId
            uid
            lang
            tags
            type
            data {
              title {
                html
                text
              }
            }
          }
          next {
            uid
            url
            type
          }
          previous {
            uid
            url
            type
          }
        }
      }
    }
  `)

  const pageTemplate = path.resolve(
    __dirname,
    `src/components/templates/Page/Page.tsx`
  )
  const workTemplate = path.resolve(
    __dirname,
    'src/components/templates/Work/Work.tsx'
  )

  // pages
  pages.data.allPrismicPage.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: pageTemplate,
      context: { ...node },
    })
  })

  works.data.allPrismicWork.edges.forEach(edge => {
    createPage({
      path: edge.node.url,
      component: workTemplate,
      context: { ...edge.node, next: edge.next, previous: edge.previous },
    })
  })
}
