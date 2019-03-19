import React from 'react'
import styled from 'styled-components'

const StyledTimelineItem = styled.div`
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
`
const TimeLineItem = data => (
  <StyledTimelineItem>
    <h2>{data.year}</h2>
    <p>{data.text}</p>
  </StyledTimelineItem>
)

export default TimeLineItem
