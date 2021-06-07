const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post 
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const blogResult = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
          filter: {fileAbsolutePath: {regex: "\/content\/blog\/"}}
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (blogResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogResult.errors
    )
    return
  }

  const posts = blogResult.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL
  posts.forEach((post, index) => {
    const previousPostId = index === 0 ? null : posts[index - 1].id
    const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id
    createPage({
      path: `blog${post.fields.slug}`,
      component: blogPost,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
      },
    })
  })
  
  const notesTemplate = require.resolve(`./src/templates/note-template.js`)
  const noteResult = await graphql(`
    {
      allFile(filter: {absolutePath: {regex: "/content\/notes\/.*md/"}}) {
        edges {
          node {
            childMdx {
              slug
            }
            absolutePath
          }
        }
      }
    }
  `)

  if (noteResult.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  
  noteResult.data.allFile.edges.forEach(({ node }) => {
    createPage({
      path: `garden/${node.childMdx.slug}`,
      component: notesTemplate,
      context: {
        // additional data can be passed via context
        slug: node.childMdx.slug,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}