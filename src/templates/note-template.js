import * as React from "react"
import { graphql, navigate } from "gatsby"
import styled from 'styled-components';
import { MDXRenderer } from "gatsby-plugin-mdx"
import { ForceGraph2D } from 'react-force-graph';


import Layout from "../components/layout"
import Seo from "../components/seo"

const NoteTitle = styled.h1`
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
`

const StyledArticle = styled.article`
  /* Heading */

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    margin-top: var(--spacing-12);
    margin-bottom: var(--spacing-6);
    line-height: var(--lineHeight-tight);
    letter-spacing: -0.025em;
    font-weight: var(--fontWeight-bold);
    color: var(--color-heading);
  }

  h1 {
    font-weight: var(--fontWeight-black);
    font-size: var(--fontSize-6);
  }

  h2 {
    font-size: var(--fontSize-5);
  }

  h3 {
    font-size: var(--fontSize-4);
  }

  h4 {
    font-size: var(--fontSize-3);
  }

  h5 {
    font-size: var(--fontSize-2);
  }

  h6 {
    font-size: var(--fontSize-1);
  }

  h1 > a, 
  h2 > a,
  h3 > a,
  h4 > a,
  h5 > a,
  h6 > a {
    text-decoration: none;
    color: inherit;
  }

  /* Prose */
  p {
    line-height: var(--lineHeight-relaxed);
    --baseline-multiplier: 0.179;
    --x-height-multiplier: 0.35;
    margin: var(--spacing-0) var(--spacing-0) var(--spacing-8) var(--spacing-0);
    padding: var(--spacing-0);
  }

  ul,
  ol {
    margin-left: var(--spacing-0);
    margin-right: var(--spacing-0);
    padding: var(--spacing-0);
    margin-bottom: var(--spacing-8);
    list-style-position: inside;
    list-style-image: none;
  }

  ul li,
  ol li {
    padding-left: var(--spacing-0);
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li > p {
    margin-bottom: calc(var(--spacing-8) / 2);
  }

  li *:last-child {
    margin-bottom: var(--spacing-0);
  }

  li > ul {
    margin-left: var(--spacing-8);
    margin-top: calc(var(--spacing-8) / 2);
  }

  blockquote {
    color: var(--color-text-light);
    margin-left: var(--spacing-0);  
    margin-right: var(--spacing-8);
    padding: var(--spacing-0) var(--spacing-0) var(--spacing-0) var(--spacing-4);
    border-left: var(--spacing-1) solid var(--color-primary);
    font-size: var(--fontSize-2);
    font-style: italic;
    margin-bottom: var(--spacing-8);
  }

  blockquote > :last-child {
    margin-bottom: var(--spacing-0);
  }

  blockquote > ul,
  blockquote > ol {
    list-style-position: inside;
  }

  table {
    width: 100%;
    margin-bottom: var(--spacing-8);
    border-collapse: collapse;
    border-spacing: 0.25rem;
  }

  table thead tr th {
    border-bottom: 1px solid var(--color-accent);
  }

  /* Link */
  a {
    color: var(--color-primary);
    text-decoration: none;
  }
`

const GraphWrapper = styled.div`
  display: relative;
`

const NoteTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const primaryNode = {
    id: post.frontmatter.title,
    slug: post.slug,
    size: 6,
  }

  const nodes = post.inboundReferences.concat(post.outboundReferences).map(reference => {
    return {
      id: reference.frontmatter.title,
      slug: reference.slug,
      size: 2,
    }
  }).concat(primaryNode);

  const outboundLinks = post.outboundReferences.map(reference => {
    return {
      target: primaryNode.id,
      source: reference.frontmatter.title
    }
  })

  const links = post.inboundReferences.map(inboundReference => {
    return {
      source: inboundReference.frontmatter.title,
      target: primaryNode.id
    }
  }).concat(outboundLinks);

  const graphData = {
    nodes,
    links
  }

  console.log(graphData)


  const [displayWidth, setDisplayWidth] = React.useState(window.innerWidth);

  window.addEventListener('resize', () => {
    setDisplayWidth(window.innerWidth);
  });

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.excerpt}
      />
      <GraphWrapper>
        <ForceGraph2D
          height={300}
          width={displayWidth}
          graphData={graphData}
          nodeLabel="id"
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}
          nodeVal="size"
          nodeColor={() => "#d1dce5"}
          linkColor={() => "#d1dce5"}
          onNodeClick={(node, event) => {
            navigate(`/constellation/${node.slug}`)
          }}
        />
      </GraphWrapper>
      <StyledArticle
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <NoteTitle itemProp="headline">{post.frontmatter.title}</NoteTitle>
        </header>
        <MDXRenderer>{post.body}</MDXRenderer>
      </StyledArticle>
    </Layout>
  )
}

export default NoteTemplate

export const pageQuery = graphql`
query ($slug: String!) {
  site {
    siteMetadata {
      title
    }
  }
  mdx(slug: {eq: $slug}) {
    body
    slug
    frontmatter {
      title
    }
    excerpt
    inboundReferences {
      ... on Mdx {
        frontmatter {
          title
        }
        slug
      }
    }
    outboundReferences {
      ... on Mdx {
        frontmatter {
          title
        }
        slug
      }
    }
  }
}
`
