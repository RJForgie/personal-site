import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'

const StyledCardGrid = styled.div`
  display: block;
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
