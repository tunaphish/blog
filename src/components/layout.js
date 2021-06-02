import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

const MainHeading = styled.h1`
  font-size: var(--fontSize-7);
  margin: 0;
`

const GlobalWrapper = styled.div`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-10) var(--spacing-5);
`

const GlobalHeader = styled.header`
  margin-bottom: var(--spacing-12);
`

const HeaderLinkHome = styled(Link)`
  font-weight: var(--fontWeight-bold);
  font-family: var(--font-heading);
  text-decoration: none;
  font-size: var(--fontSize-2);
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <MainHeading>
        <Link to="/">{title}</Link>
      </MainHeading>
    )
  } else {
    header = (
      <HeaderLinkHome to="/">
        {title}
      </HeaderLinkHome>
    )
  }

  return (
    <GlobalWrapper data-is-root-path={isRootPath}>
      <GlobalHeader>{header}</GlobalHeader>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </GlobalWrapper>
  )
}

export default Layout
