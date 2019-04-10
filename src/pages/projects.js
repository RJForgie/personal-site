import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const StyledCardGrid = styled.div`
  /* display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 50% 50%;
  grid-gap: 2rem;
  height: 100%;
  padding: 5%;
  overflow-y: scroll;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  } */
  display: flex;
  margin: 0px 20px 0px 20px;
`

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <StyledCardGrid>
      <Card />
      <Card />
    </ StyledCardGrid>
  </Layout>
)

export default Projects
