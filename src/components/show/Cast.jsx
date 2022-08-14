import React from 'react'
import { CastList } from './Cast.styled';

const Cast = ({data}) => {
  const {_embedded} = data
  const {cast} = _embedded; //arr

  
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className='cast-item'>
          <div className='pic-wrapper'>
            <img
              src={person.image && person.image.medium }
              alt="cast-person"
              
            />
          </div>
          <div className='actor'>
            <span className='bold'>
              {person.name} | {character.name} {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
}

export default Cast