import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`
const ItemWrapper = styled.div`
  background-color: red;
  justify-content: center;
  align-items: center;
  border: 5px solid black;
`
const Photo = styled(ItemWrapper)`
  grid-column-start: 1;
`

const Card = styled(ItemWrapper)`
  grid-column-start: 2;
`

const IndexPage = () => (
  <Layout>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />    
    <Container className='grid'>
      <Photo>photo</Photo>
      <Card>card</Card>
    </Container>
  </Layout>
)

export default IndexPage
