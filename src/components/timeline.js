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
  {
    year: `2015`,
    text: `2015 timeline text`
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
