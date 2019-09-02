import React from 'react';

import './Films.css'

import greenSaber from '../../assets/images/green-saber.svg'
import redSaber from '../../assets/images/red-saber.svg'

export const Film = props => (
  <li className="films__item">
    <h3 className="films__title">
      {props.film.title}
      <span> ~ (Episode {props.film.episode_id})</span>
    </h3>
    <div className="films__container">
      <img className="films__img--green" src={greenSaber} alt="green-saber" />
      <ul className="films__info">
        <li>Released in <span>{props.film.release_date}</span></li>
        <li>Directed by <span>{props.film.director}</span></li>
        <li>Produced by <span>{props.film.producer}</span></li>
      </ul>
      <img className="films__img--red" src={redSaber} alt="red-saber" />
    </div>
    
  </li>
);