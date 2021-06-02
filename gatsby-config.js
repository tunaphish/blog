module.exports = {
  // Customize your site metadata:
  siteMetadata: {
    title: `tuna blog`,
    author: `Tuan Pham`,
    description: `temp blog info`,
    pathPrefix: "/blog",
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
}
