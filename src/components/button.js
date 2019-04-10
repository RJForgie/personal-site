import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    display: block;
    font-size: 1rem;
    background: #e76c67;
    border: 1px solid #e76c67;
    padding: 0.75rem 1rem;
    color: white;
    text-decoration: none;
    font-weight: 700;
    text-align: center;

    &:hover,
    :focus {
        background: darken(#e76c67, 10%);
        border: 1px solid darken(#e76c67, 10%);
    }
}`

const Button = () => (
  <StyledButton>
      Read Article
  </StyledButton>
)

export default Button
