import React from 'react';
import NOT_FOUND from '../../images/not-found.png';
import { CastList } from './Cast.styles';

const Cast = ({ cast }) => {
  return (
    <CastList>
      {cast.map(({ person, character, voice }, key) => (
        <div key={key} className="cast-item">
          <div className="pic-wrapper">
            <img
              src={person.image ? person.image.medium : NOT_FOUND}
              alt="cast-person"
            />
          </div>
          <div className="actor">
            <span>
              <span className="bold">{person.name}</span>| {character.name}{' '}
              {voice ? '| Voice' : ''}
            </span>
          </div>
        </div>
      ))}
    </CastList>
  );
};

export default Cast;
