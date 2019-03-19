import React from 'react'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 33% 33% 33%;
  height: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
  }
`
const ItemWrapper = styled.div`
  background-color: #2e5073;
  justify-content: center;
  align-items: center;
`
const PhotoWrapper = styled(ItemWrapper)`
  height: 100%;
  padding: 5px;

  grid-column-start: 2;
  grid-row-start: 2;

  @media (max-width: 1024px) {
    grid-column-start: 1;
    grid-row-start: 1;
  }
`

const CardWrapper = styled(ItemWrapper)`
  height: 100%;

  grid-column-start: 3;
  grid-row-start: 2;

  @media (max-width: 1024px) {
    grid-column-start: 1;
    grid-row-start: 2;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Container className='grid'>
      <PhotoWrapper>
        <Image />
      </PhotoWrapper>
      <CardWrapper>
        <div style={{
          backgroundColor: `#8196ab`,
          width: `100%`,
          height: `100%`,
        }}>
          test
        </div>
      </CardWrapper>
    </Container>
  </Layout>
)

export default IndexPage
