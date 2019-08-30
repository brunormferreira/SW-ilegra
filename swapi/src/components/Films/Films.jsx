import React from 'react';

import './Films.css'

export const Film = props => (
  <li className="results__item">
    <h3 className="results__title">
      {props.film.name}
      <span> (Episode {props.film.episode_id})</span>
    </h3>
    <ul className="results__info">
      <li>Released <span>{props.film.release_date}</span> </li>
      <li>Directed by <span>{props.film.director}</span> </li>
      <li>Produced by <span>{props.film.producer}</span> </li>
    </ul>
  </li>
);