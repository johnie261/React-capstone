import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaCog } from 'react-icons/fa';
import { FaMicrophone } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  return (
    <Wrapper>
    <div className="header">
        <Link to="/" className="icons"> 
            <FontAwesomeIcon icon={faAngleLeft} />
        </Link>
        <h1 className="title">Harry Potter characters</h1>
        <div className="icons icon-space">
            <FaMicrophone />
            <FaCog />
        </div>
   </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ec4c8b;
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
    }
}
`

export default Header