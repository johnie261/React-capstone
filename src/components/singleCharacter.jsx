import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { fetchCharacters } from '../redux/character/characterSlice'
import styled from 'styled-components'

const SingleCharacter = () => {
    const {id} =useParams()
    const dispatch = useDispatch()
    const { characters } = useSelector((store) => store.character);

    useEffect(()=>{
        dispatch(fetchCharacters());
    }, [])

    const HarryCharacters = characters.find((character) => character.id === id);
    console.log(HarryCharacters);
    const {image,
        house,
        actor,
        gender,
        hairColour,
        name,
        species,
        dateOfBirth,
        ancestry,
        yearOfBirth,
        alternate_names,
        wand,
    } = HarryCharacters

  return (
    <Wrapper>
      <section >
        <div className="intro">
          <img src={image} alt="name" className="Img"/>
          <div>
            <h2>{name}</h2>
            <h3>Year of Birth: {yearOfBirth}</h3>
          </div>
        </div>
        <div className="bio">
          <h3>{name} BIOGRAPHIC INFORMATION</h3>
        </div>
        <ul>
          <li>
            <h3>Date Of Birth</h3>
            {dateOfBirth && <h3>{dateOfBirth}</h3>}
            {!dateOfBirth && <h3>Unknown</h3>}
          </li>
          <li>
            <h3>Also known as</h3>
            {alternate_names && <h3>{alternate_names.map((name) => <div>{name}</div>)}</h3>}
            {alternate_names.length === 0 && <h3>N/A</h3>}
          </li>
          <li>
            <h3>Gender</h3>
            <h3>{gender}</h3>
          </li>
          <li>
            <h3>Species</h3>
            <h3> {species}</h3>
          </li>
          <li>
            <h3>ancestry</h3>
            {ancestry && <h3>{ancestry}</h3>}
            {!ancestry && <h3>Unknown</h3>}
          </li>
          <li>
            <h3>House</h3>
            {house && <h3>{house}</h3>}
            {!house && <h3>Unknown</h3>}
          </li>
          <li>
            <h3>Hair colour</h3>
            <h3>{hairColour}</h3>
          </li>
          <li>
            <h3>wand</h3>
            <div className="wand">
              {Object.entries(wand).map(([key, value]) => {
              return (
                <div key={key}>
                 <strong>{key}: </strong> {value}
                </div>
              )
             })}
            </div>
          </li>
          <li>
            <h3>Played by</h3>
            <h3> {actor}</h3>
          </li>
        </ul>
        <div className="info">
          
        </div>
      </section>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.intro {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #fd5294;
  background-color: #f696bd;
  background: #ec4c8b;
  height: auto;
  padding: 2%;
  color: #fff;
  .Img {
    width: 20%;
    height auto;
    border-radius: .5rem;
  }
  h2 {
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  h3 {
    font-size: 2rem
  }
}
.bio {
  display: flex;
  align-items: center;
  background-color: #db3578;
  text-transform: uppercase;
  border: 1px solid transparent;
  padding: 1rem 3rem;
  color: #fff;
  font-size: 1.5rem;
}
ul {
  margin-top: -1.2rem;
  background-color: #db3578;
  color: #fff;
  li {
    display: flex;
    justify-content: space-between;
    margin-left: -2.2rem;
    align-items: center;
    padding: 2% 20% 2% 7%;
    height: 5rem;
    list-style: none;
    h3, 
    .wand {
      text-transform: capitalize;
      font-size: 1.5rem;
    }
  }
  li:nth-child(odd) {
    background: #ec4c8b;
  }
}

@media only screen and (max-width: 999px) {
  .intro {
    h2 {
      font-size: 2.2rem
    }
    h3 {
      font-size: 1.7rem
    }
  }
  .bio {
    font-size: 1.3rem;
  }
  ul {
    li {
      h3,
      .wand {
        font-size: 1.3rem;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .intro {
    h2 {
      font-size: 1.7rem
    }
    h3 {
      font-size: 1.3rem
    }
  }
  .bio {
    font-size: 1rem;
  }
  ul {
    li {
      h3,
      .wand {
        font-size: 1.1rem;
      }
    }
  }
}

@media only screen and (max-width: 768px) {
  .intro {
    h2 {
      font-size: 1.5rem
    }
    h3 {
      font-size: 1.1rem
    }
  }
  .bio {
    font-size: .8rem;
  }
  ul {
    li {
      h3,
      .wand {
        font-size: 1rem;
      }
    }
  }
}
`

export default SingleCharacter