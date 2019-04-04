import React from 'react'
import styled from 'styled-components'
import Image from '../components/image'

const StyledCard = styled.div`
    height: 100%;
    width: 100%;
    background-color: #24405c;
    color:#8196ab;
    border-radius: 15px;
    overflow: hidden;

    display: grid;
    grid-template-columns: 0.40fr 0.60fr;
    grid-template-rows: 33% 33% 33%;

    @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 25% 25%;
  }
`

const Card = () => (
  <StyledCard>
    <Image />
    <div>Ryan Forgie</div>
    <div>Social Icons</div>
  </StyledCard>
)

export default Card
