import * as React from "react"
import { graphql } from "gatsby"
import styled from 'styled-components';

import Layout from "../components/layout"
import Seo from "../components/seo"
import ForceGraph from "../components/force-graph"

let graph;

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
`

const BlogIndex = ({ data, location }) => {
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

  const refElement = React.useRef();

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
    const props = {
      height: window.innerHeight,
      width: window.innerWidth
    }
    graph = new ForceGraph(refElement.current, props, graphData)
  }, []);

  React.useEffect(() => {
    if (typeof window === 'undefined') return;
  
    const handleResize = () => {
      graph.visualization.height(window.innerHeight);
      graph.visualization.width(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize)
    };
  });

  return (
    <>
      <GraphWrapper ref={refElement}>

      </GraphWrapper>
      <Layout location={location}>
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
