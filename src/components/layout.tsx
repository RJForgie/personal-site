import React from "react"
import PropTypes from "prop-types"
import styled from 'styled-components'
import GlobalStyles from './GlobalStyles'
import { StaticQuery, graphql } from "gatsby"
import "./layout.css"

import Header from "./header"

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
      <div className="grid">
        <div className="item nav">1</div>
        <div className="item image-wrapper">2</div>
        <div className="item info-wrapper">3</div>
      </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
