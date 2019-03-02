import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.css"

const IndexPage = () => (
  <Layout>
  <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />    
    <div className='grid'>
      <div className='item image-wrapper'>photo</div>
      <div className='item card-wrapper'>card</div>
    </div>
  </Layout>
)

export default IndexPage
