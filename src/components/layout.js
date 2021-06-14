import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';

import Phish from './phish';

const GlobalWrapper = styled.div`
  margin: var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-5);

  display: flex;
  flex-direction: column;
  min-height: 99vh;
`

const Heading = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  font-size: var(--fontSize-7);

  display: flex;
  justify-content: space-between;

  padding: var(--spacing-2);
`

const Main = styled.main`
  flex-grow: 1;
`

const Footer = styled.footer`
  padding: var(--spacing-6) var(--spacing-0);
`


const Layout = ({ location, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <>
      <GlobalWrapper data-is-root-path={isRootPath}>
        <Heading>
          <Link to="/"><Phish/></Link>
        </Heading>
        <Main>{children}</Main>
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </Footer>
    </GlobalWrapper>
    </>
  )
}

export default Layout
