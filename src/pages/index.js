import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import styled from 'styled-components'

const Container = styled.div`
 justify-content: center;
  align-items: center;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <Card />
    </Container>
  </Layout>
)

export default IndexPage
