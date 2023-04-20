import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaCog, FaMicrophone } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <Wrapper>
    <div className="header">
      <Link to="/" className="icons">
        <FontAwesomeIcon icon={faAngleLeft} />
      </Link>
      <p className="title">Harry Potter characters</p>
      <div className="icons icon-space">
        <FaMicrophone />
        <FaCog />
      </div>
    </div>
  </Wrapper>
);

const Wrapper = styled.div`
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #db3578;
    padding: 0 3.5rem;
    .icons {
        color: #fff;
        font-size: 1.7rem;
    }
    .icon-space{
        display: flex;
        gap: 0.9rem;
    }
    .title {
        font-size: 2rem;
        color: #fff;
    }
}

@media only screen and (max-width: 768px) {
    .header {
        .title {
            font-size: 1.5rem;
        }
    }
  }

  @media only screen and (max-width: 500px) {
    .header {
        padding: 1rem;
        .title {
            font-size: 1.3rem;
        }
    }
  }
`;

export default Header;
