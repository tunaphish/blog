import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Phish from './phish';

const GlobalWrapper = styled.div`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-10) var(--spacing-5);
`

const MainHeading = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  font-size: var(--fontSize-7);

  display: flex;
  justify-content: space-between;

  > *{
    margin: var(--spacing-2)
  }
`

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <GlobalWrapper data-is-root-path={isRootPath}>
      <MainHeading>
        <Link to="/"><Phish/></Link>
      </MainHeading>

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
