import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledImage = styled(Img)`
  /* max-width: 100%;
  max-height: 100%;

  grid-row: span 3;

  @media (max-width: 1024px) {
    grid-row: span 1; */
  height: 275px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`

const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        profileImage: file(relativePath: { eq: "headshot.JPG" }) {
          childImageSharp {
            sizes(maxWidth: 1000, quality: 75) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    `}
    render={data =>
      <StyledImage sizes={data.profileImage.childImageSharp.sizes} />
    }
  />
)
export default Image
