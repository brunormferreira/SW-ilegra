import React from 'react';
import ReactDOM from 'react-dom';
import App from '../Main/App';

import { getFilms } from '../services/Api'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Fake Test', () => {
  expect(true).toBeTruthy();
})

describe('test API', () => {
  it('should load films data', async () => {
    const response = await getFilms().then(film => {
      console.log(film.data.results)
    })
  })
})