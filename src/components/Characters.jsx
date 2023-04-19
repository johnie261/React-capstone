import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { fetchCharacters } from '../redux/character/characterSlice';
import Character from './Character';
import Details from '../pages/details';

const Characters = ({ characters }) => {
  const { isLoading } = useSelector((store) => store.character);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCharacters());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="sect">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <Wrapper>
      <p className="title-character">STATS BY CHARACTER</p>
      <ul className="characters">

        {characters.map((character) => (
          <Link to={`details/${character.id}`} element={<Details />} className="link" key={character.id}>
            <Character
              id={character.id}
              image={character.image}
              name={character.name}
            />
          </Link>
        ))}
      </ul>
    </Wrapper>
  );
};

Characters.propTypes = {
  characters: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};

const Wrapper = styled.section`
background-color: #ec4c8b;
background-color: #db3578;
.title-character {
  color: #fff;
  font-size: 1.7rem;
  padding: 2rem;
  margin-top: -2rem;
}
.characters {
  margin-top: -3rem;
  list-style: none;
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20%, 1fr));
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
  .link {
    text-decoration: none;
  }
}

@media only screen and (max-width: 768px) {
  .title-character {
    font-size: 1.3rem;
  }
  .characters {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media only screen and (max-width: 500px) {
  .title-character {
    font-size: 1.3rem;
  }
  .characters {
    grid-template-columns: 1fr 1fr;
  }
}

`;

export default Characters;
