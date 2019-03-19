import React from 'react'
import styled from 'styled-components'

const StyledCard = styled.div`
    height: 100%;
    width: 100%;
    background-color: #24405c;
    color:#8196ab;
    border-radius: 15px;

    display: grid;
    grid-template-rows: 33% 33% 33%;
`

const Card = () => (
  <StyledCard>
    <div>Ryan Forgie</div>
    <div>One sentence</div>
    <div>Social Icons</div>
  </StyledCard>
)

export default Card
