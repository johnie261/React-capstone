import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCharacters } from '../redux/character/characterSlice';
import Character from './Character';
import styled from 'styled-components';

const Characters = ({characters}) => {
    // const { characters } = useSelector((store) => store.character);
    console.log(characters)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchCharacters());
    }, [])

  return (
    <Wrapper>   
    <p className="title-character">STATS BY CHARACTER</p>
    <ul className="characters">
        {characters.slice(0,25).map((xter)=>(
            <Character
            key={xter.id}
            image={xter.image}
            name={xter.name}
            />
        )
        )}
    </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
background-color: #ec4c8b;
.title-character {
  padding: 1rem;
  color: #fff;
  margin-top: -.7rem;
}
.characters {
  border: 2px solid black;
  list-style: none;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  gap: 1rem;
}

`

export default Characters