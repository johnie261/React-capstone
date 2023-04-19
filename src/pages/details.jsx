import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SingleCharacter from '../components/singleCharacter';

const Details = () => (
  <Wrapper>
    <section>
      <Header />
      <SingleCharacter />
    </section>
  </Wrapper>
);

const Wrapper = styled.section`
margin: -1rem
`;

export default Details;
