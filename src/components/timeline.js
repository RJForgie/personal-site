import React from 'react'
import styled from 'styled-components'
import TimelineItem from './timelineItem'

const StyledTimeline = styled.div`
    position: relative;
    max-width: 1200px;
    margin: 0 auto;

    ::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    }

    

    

    @media screen and (max-width: 600px) {
        /* Place the timelime to the left */
        ::after {
        left: 31px;
        }

        ::before {
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
}
`

const timeLineData = [
  {
    year: `2019`,
    text: `2019 timeline text`
  },
  {
    year: `2018`,
    text: `2018 timeline text`
  },
  {
    year: `2017`,
    text: `2017 timeline text`
  },
  {
    year: `2016`,
    text: `2016 timeline text`
  },
]
const Timeline = () => (
  <StyledTimeline>
    {
      timeLineData.map((timelineItem, index) => {
        return <TimelineItem
          key={index}
          timelineItem={timelineItem}
          class={index % 2 === 0 ? 'left' : 'right'}
        />
      })
    }
  </StyledTimeline>
)

export default Timeline
