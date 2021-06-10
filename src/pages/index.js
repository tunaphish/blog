import * as React from "react"
import { graphql, navigate } from "gatsby"
import styled from 'styled-components';
import { ForceGraph2D, ForceGraph3D } from 'react-force-graph';

import Layout from "../components/layout"
import Seo from "../components/seo"


const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const notes = data.allFile.edges

  //create nodes
  const nodes = notes.map(note => {
    return {
      id: note.node.childMdx.frontmatter.title,
      slug: note.node.childMdx.slug
    }
  });

  //create links
  const links = notes.reduce((currentArray, note) => {
    const root = note.node.childMdx.frontmatter.title;
    const inboundLinks = note.node.childMdx.inboundReferences.map(inboundReference => {
      return {
        source: inboundReference.frontmatter.title,
        target: root
      }
    })
    return currentArray.concat(inboundLinks)
  }, [])

  const graphData = {
    nodes,
    links
  }

  console.log(graphData);

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <ForceGraph2D
        graphData={graphData}
        height={400}
        linkDirectionalParticles={2}
        linkDirectionalParticleSpeed={0.005}
        onNodeClick={(node, event) => {
          navigate(`garden/${node.slug}`)
        }}
      />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
{
  site {
    siteMetadata {
      title
    }
  }
  allFile(filter: {absolutePath: {regex: "/content/notes/.*md/"}}) {
    edges {
      node {
        childMdx {
          inboundReferences {
            ... on Mdx {
              frontmatter {
                title
              }
            }
          }
          frontmatter {
            title
          }
          slug
        }
      }
    }
  }
}
`
