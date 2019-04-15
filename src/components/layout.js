import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import { StaticQuery, graphql, Link } from 'gatsby'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(150px, 1fr));
  height: 100vh;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 90% 10%;
  }
`
const ItemWrapper = styled.div`
  background-color: #1b3045;
  justify-content: center;
  align-items: center;
`
const Nav = styled(ItemWrapper)`
  height: 100%;
  display: grid;
  grid-column-start: 1;  
  grid-template-rows: repeat(auto-fit, 25%);
  z-index: 2;
  

  @media (max-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 100%;
    position: fixed;
    top: auto;
    left: 0;
    right: 0;
    bottom: 0;
    height: 10%;
  }
`

const Content = styled(ItemWrapper)`
  grid-column-start: 2;
  grid-column: span 5;

  @media (max-width: 1024px) {
    grid-row-start: 1;
  }
`

const ListLink = props => (
  <li style={{
    display: `inline-block`,
    marginRight: `1rem`,
    textAlign: `center`,
  }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
      <GlobalStyles />
      <Container>
        <Nav>
          <ListLink to="/">About</ListLink>
          <ListLink to="/projects/">Projects</ListLink>
          <ListLink to="/resume/">CV</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </Nav>
        <Content>
          {children}
        </Content>
      </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
