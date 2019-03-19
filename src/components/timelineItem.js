import React from 'react'
import styled from 'styled-components'

const StyledTimelineItem = styled.div`
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;

    ::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: #57728f;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
    }

    &.left {
    left: 0;

        ::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 30px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
        }
    }

    &.right {
    left: 50%;

        ::before {
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 30px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
        }

        ::after {
        left: -16px;
        }
    }

    @media (max-width: 600px) {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;

        &.left::before, &.right::before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
        }

        /* Make sure all circles are at the same spot */
        .left::after, .right::after {
        left: 15px;
        }
        
        /* Make all right containers behave like the left ones */
        .right {
        left: 0%;
        }
    }
`
const Content = styled.div`
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
`
const TimeLineItem = data => (
  <StyledTimelineItem className={data.class}>
    <Content>
      <h2>{data.timelineItem.year}</h2>
      <p>{data.timelineItem.text}</p>
    </Content>
  </StyledTimelineItem>
)

export default TimeLineItem
