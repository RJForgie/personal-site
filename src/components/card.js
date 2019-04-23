import React from 'react'
import styled from 'styled-components'
import Image from '../components/image'
import Button from '../components/button'

const StyledCard = styled.div`
  flex: 1 1 50%;
  position: relative;
  border: 1px solid #efefef;
  color: #444444;
  background-color: white;
  overflow-y: initial;
  max-width: 50%;
  margin: 8px;


  .card-content {
    padding: 30px 30px 110px;
  }

  .card-details {
    position: absolute;
    width: 100%;
    left: 0;
  }

  .card-details-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid #efefef;
    margin: 0 30px;
    padding: 30px 0;
  }

  h1 {
    margin: 0;
  }

  p {
    margin: 0 0 30px;
  }

  .subtitle {
    margin: 0;
    font-weight: 700;
    font-size: 1.25rem;
    color: #e76c67;
  }

  .card-image {
  height: 200px;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

  @media (max-width: 800px) {
    max-width: 100%;
  }
`

const Card = () => (
  <StyledCard>
    <Image />
    <div class='card-content'>
      <h1>Title</h1>
      <div class="subtitle">Subtitle goes here</div>
      <p>
      test testtesttesttesttesttesttesttesttesttesttest
      testtesttesttesttesttesttest testtesttesttesttesttest
      test testtesttesttesttesttest
      </p>

      <div class="card-details">
        <div class="card-details-inner">
          <div class="read-more">
            <Button class="button" href="https://en.wikivoyage.org/wiki/Chicago">Button text</Button>
          </div>
          <div class="options">
            <div class="comments">
              <a href="#!">
                <i class="fa fa-comments-o"></i>
              16 comments
              </a>
            </div>
            <div class="likes">
              <a href="#!">
                <i class="fa fa-heart-o"></i>
              322 likes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledCard>
)

export default Card
