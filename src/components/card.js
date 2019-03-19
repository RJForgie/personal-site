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
    grid-template-columns: 0.30fr 0.70fr;
    grid-template-rows: 33% 33% 33%;

    @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-rows: 55% 15% 15% 15%;
  }
`

const Card = () => (
  <StyledCard>
    <Image />
    <div>Ryan Forgie</div>
    <div>One sentence</div>
    <div>Social Icons</div>
  </StyledCard>
)

export default Card