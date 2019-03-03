import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(autofill)
  }
`
const ItemWrapper = styled.div`
  background-color: red;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
`
const PhotoWrapper = styled(ItemWrapper)`
  height: 100%;
  
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% 60% 20%;
`

const CardWrapper = styled(ItemWrapper)`
  height: 100%;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container className='grid'>
      <PhotoWrapper>
        <div style={{ gridRowStart: `2` }}>
          <Image />
        </div>
      </PhotoWrapper>
      <CardWrapper>card</CardWrapper>
    </Container>
  </Layout>
)

export default IndexPage
