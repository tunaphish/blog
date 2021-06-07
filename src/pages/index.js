import * as React from "react"
import { Link, graphql } from "gatsby"
import styled from 'styled-components';


import Layout from "../components/layout"
import Seo from "../components/seo"

const PostListItem = styled.article`
  margin-bottom: var(--spacing-8);
  margin-top: var(--spacing-8);
`

const Container = styled.header`
  margin-bottom: var(--spacing-4);
`

const Description = styled.p`
  margin-bottom: var(--spacing-0);
`

const Title = styled.h2`
  font-size: var(--fontSize-4);
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
  margin-top: var(--spacing-0);
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ol style={{ listStyle: `none` }}>
        {posts.map(post => {
          const title = post.frontmatter.title || post.fields.slug

          return (
            <li key={post.fields.slug}>
              <PostListItem
                itemScope
                itemType="http://schema.org/Article"
              >
                <Container>
                  <Title>
                    <Link to={`note${post.fields.slug}`} itemProp="url">
                      <span itemProp="headline">{title}</span>
                    </Link>
                  </Title>
                  <small>{post.frontmatter.date}</small>
                </Container>
                <section>
                  <Description
                    dangerouslySetInnerHTML={{
                      __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                  />
                </section>
              </PostListItem>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
