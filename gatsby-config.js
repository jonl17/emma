require('dotenv').config({
  path: `.env`,
})

const path = require('path')

const linkResolver = require('./src/utils/linkResolver')

module.exports = {
  siteMetadata: {
    title: `Emma Heiðarsdóttir`,
    description:
      'Emma Heiðarsdóttir is a visual artist based in Reykjavík, Iceland.',
    keywords:
      'Emma Heiðarsdóttir, Visual artist, Iceland art scene, Contemporary art.',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: process.env.PRISMIC_REPO_NAME,
        accessToken: process.env.PRISMIC_ACCESS_TOKEN,
        linkResolver: () => doc => linkResolver(doc),
        schemas: {
          page: require(`./src/prismic/schemas/page.json`),
          work: require(`./src/prismic/schemas/work.json`),
          homepage: require('./src/prismic/schemas/homepage.json'),
          navigation: require('./src/prismic/schemas/navigation.json'),
        },
        lang: '*',
        prismicToolbar: true,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(
          './src/components/layouts/Layout/Layout.tsx'
        ),
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@root': path.resolve(__dirname, '.'),
          '@src': path.resolve(__dirname, 'src'),
          '@cmp': path.resolve(__dirname, 'src/components'),
        },
        extensions: [`ts`, `tsx`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
