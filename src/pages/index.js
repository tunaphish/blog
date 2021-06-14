import * as React from "react"
import { graphql, navigate } from "gatsby"
import styled from 'styled-components';
import { ForceGraph2D } from 'react-force-graph';

import Layout from "../components/layout"
import Seo from "../components/seo"

const GraphWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  z-index: 99;

  canvas {
    max-width: 100%;
  }
`

const AboutMe = styled.div`
  padding-top: var(--spacing-12);
`

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

  const [displayWidth, setDisplayWidth] = React.useState(window.innerWidth);
  const [displayHeight, setDisplayHeight] = React.useState(window.innerHeight);

  window.addEventListener('resize', () => {
    setDisplayWidth(window.innerWidth);
    setDisplayHeight(window.innerHeight);
  });

  return (
    <>
      <GraphWrapper>
        <ForceGraph2D
          height={displayHeight}
          width={displayWidth}
          graphData={graphData}
          nodeLabel="id"
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={0.005}
          nodeColor={() => "#d1dce5"}
          linkColor={() => "#d1dce5"}
          onNodeClick={(node, event) => {
            navigate(`constellation/${node.slug}`)
          }}
        />
      </GraphWrapper>
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <AboutMe>
          <p>Hi, I am Tuan!</p>
          <p>
            Welcome to the constellation of my thoughts.
            The stars are notes I've written to myself attached to eachother through hyperlinks.
          </p>
          <p>
            Click on one and see where the connections take you.
          </p>
        </AboutMe> 
      </Layout>
    </>
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
