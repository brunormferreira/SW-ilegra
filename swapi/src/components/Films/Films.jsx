import React from 'react';

import './Films.css'

export const Film = props => (
  <li className="films__item">
    <h3 className="films__title">
      {props.film.title}
      <span> ~ (Episode {props.film.episode_id})</span>
    </h3>
    <ul className="films__info">
      <li>Released <span>{props.film.release_date}</span> </li>
      <li>Directed by <span>{props.film.director}</span> </li>
      <li>Produced by <span>{props.film.producer}</span> </li>
    </ul>
  </li>
);