/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'

const BioStyle = styled.div`
  display: flex;
  margin-bottom: var(--spacing-16);
`

const BioCaption = styled.p`
  margin-bottom: var(--spacing-0);
`

const BioAvatarWrapper = styled.div`
  img {
    margin-right: var(--spacing-4);
    margin-bottom: var(--spacing-0);
    min-width: 50px;
    border-radius: 100%;
  }
`

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  const author = data.site.siteMetadata?.author

  return (
    <BioStyle>
      <BioAvatarWrapper>
        <StaticImage
          layout="fixed"
          formats={["AUTO", "WEBP", "AVIF"]}
          src="../images/profile-pic.jpg"
          width={50}
          height={50}
          quality={95}
          alt="Profile picture"
        />
      </BioAvatarWrapper>

      {author?.name && (
        <BioCaption>
          Written by <strong>{author.name}</strong> {author?.summary || null}
        </BioCaption>
      )}
    </BioStyle>
  )
}

export default Bio
