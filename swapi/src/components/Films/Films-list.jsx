import React from 'react';

import { Film } from './Films'

import './Films-list.css'

export const FilmList = props => (
  <div className="films__list">
    {props.films.map(film => (
      <Film key={film.episode_id} film={film} />
    ))}
  </div>
);