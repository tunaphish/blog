import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import Seo from "../components/seo"

const NoteTitle = styled.h1`
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
`

const NoteTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <article
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <NoteTitle itemProp="headline">{post.frontmatter.title}</NoteTitle>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          {/*Insert a bio or something here later*/}
        </footer>
      </article>
    </Layout>
  )
}

export default NoteTemplate

export const pageQuery = graphql`
  query NoteBySlug(
    $id: String!
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
      } 
    }
  }
`
