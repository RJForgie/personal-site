import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const StyledCardGrid = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr;
  grid-template-rows: 50% 50%;
`

const Projects = () => (
  <Layout>
    <SEO title="Projects" />
    <StyledCardGrid>
      <Card />
      <Card />
      <Card />
      <Card />
    </ StyledCardGrid>
  </Layout>
)

export default Projects
