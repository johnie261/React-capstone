import React from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import SingleCharacter from '../components/singleCharacter'

const Details = () => {
  return (
    <Wrapper>
      <section>
        <Header />
        <SingleCharacter />
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
margin: -1rem
`

export default Details