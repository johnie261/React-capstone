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
        <div className="icons icon-space">
            <FaMicrophone />
            <FaCog />
        </div>
   </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
border: 1px solid red;
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ec4c8b;
    padding: 2rem;
    margin: -1rem;
    .icons {
        color: #fff;
        font-size: 1.7rem;
    }
    .icon-space{
        display: flex;
        gap: 0.9rem;
    }
}
`

export default Header