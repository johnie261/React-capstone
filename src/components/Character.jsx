import React from 'react'
import styled from 'styled-components';

const Character = ({id, image, name}) => {
  return (
    <Wrapper>
    <li className="character">
        <img src={image} alt={name} className="image"/>
        <p>{name}</p>
    </li>
    </Wrapper>
  )
}

const Wrapper = styled.li`
.character {
  border: 1px solid black;
  list-style: none;
  .image {
    width: 100%;
    height: 60vh;
  }
  &:nth-child(even) (
    background-color: #fd5294;
  )
}
`

export default Character

