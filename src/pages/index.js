import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/card'
import styled from 'styled-components'

const Container = styled.div`
  /* display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 20% 60% 20%;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 100%;
  } */
`
const ItemWrapper = styled.div`
  justify-content: center;
  align-items: center;
`

const CardWrapper = styled(ItemWrapper)`
  max-width: 50%;
  /* height: 100%;

  grid-row-start: 2;
  grid-column: span 3; */

  @media (max-width: 1024px) {
    /* grid-column-start: 1;
    grid-row-start: 1; */
    max-width: 100%;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container>
      <CardWrapper>
        <Card />
      </CardWrapper>
    </Container>
  </Layout>
)

export default IndexPage
