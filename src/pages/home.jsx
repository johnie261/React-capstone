import React, { useState } from 'react'
import Header from '../components/Header'
// import styled from 'styled-components'
import styled from '@emotion/styled';
import Characters from '../components/Characters';
import { useSelector } from 'react-redux';

const Home = () => {
  const { characters } = useSelector((store) => store.character);
  const [filter, setFilter]= useState('');

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  const filteredCharacters = characters.filter(
    (character) => character.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return ( 
    <Wrapper>
      <section>
        <Header />
        <div className="input">
          <form className="form">
              <input type="text" placeholder="Enter name of the character" onChange={handleChange}/>
          </form>
        </div>
        <Characters characters={filteredCharacters}/>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin: -1rem;
.input {
  display: flex;
  justify-content: center;
  background: #ec4c8b;
  background-color: #db3578;
  .form {
    padding: 1.5rem;
    margin-top: -1.7rem;
    display: flex;
    justify-content: center;
    width: 50%;
    input {
      border-radius: .7rem;
      padding: .7rem;
      text-align: center;
      font-size: 1rem;
      width: 90%;
      background-color: #fff;
      outline: none;
      border: none;
    }
  }
}
`

export default Home;