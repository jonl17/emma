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

  works.data.allPrismicWork.nodes.forEach(node => {
    createPage({
      path: node.url,
      component: workTemplate,
      context: { ...node },
    })
  })
}
