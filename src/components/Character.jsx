import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Character = ({ image, name }) => (
  <Wrapper>
    <li className="character">
      {image && <img src={image} alt={name} className="image" />}
      {!image && <h2 className="not-found">Image not found</h2>}
      <div className="txt">
        <p>{name}</p>
      </div>
    </li>
  </Wrapper>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

// <img src={image} alt={name} className="image"/>

const Wrapper = styled.div`
.character {
  border-radius: 1rem;
  list-style: none;
  .image {
    border-radius: 1rem;
    width: 100%;
    height: 60vh;
  }
  .txt {
    display: flex;
    justify-content: center;
    color: #fff;
    font-size: 1.5rem;
  }
}

@media only screen and (max-width: 1250px) {
  .character {
    .image {
      height: 40vh;
      width: 100%;
    }
  }

@media only screen and (max-width: 999px) {
  .character {
    .image {
      height: 25vh;
      width: 100%;
    }
  }
  .txt {
    font-size: 1.3rem;
  }
}
`;

export default Character;
