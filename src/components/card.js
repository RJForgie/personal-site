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
  /* max-width: 50%; */
  overflow-y: initial;
  margin: 20px;


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

    /* height: 100%;
    width: 100%;
    background-color: #24405c;
    color:#8196ab;
    border-radius: 15px;
    overflow: hidden;

    display: grid;
    grid-template-columns: 0.40fr 0.60fr;
    grid-template-rows: 33% 33% 33%; */

    @media (max-width: 1024px) {
    /* max-height: 100%;
    max-width: 100%;
    flex: 1 1 50%; */
    margin: 0;
    }
`

const Card = () => (
  <StyledCard>
    <Image />
    <div class='card-content'>
      <h1>The Second City</h1>
      <div class="subtitle">City of Big Shoulders</div>
      <p>
      Chicago is the home of the blues and the truth of jazz, the heart of comedy and the idea of
      the skyscraper. It's a city with a swagger, but without the surliness or even the fake smiles
      found in other cities of its size.
      </p>

      <div class="card-details">
        <div class="card-details-inner">
          <div class="read-more">
            <Button class="button" href="https://en.wikivoyage.org/wiki/Chicago">Read Article</Button>
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
