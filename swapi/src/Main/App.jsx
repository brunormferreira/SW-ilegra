import React, { Component } from 'react';
import './App.css';

import { Logo } from '../components/Logo/Logo'
import { FilmList } from '../components/Films/Films-list'

class App extends Component {
  constructor() {
    super()

    this.state = {
      films: [],
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(film => this.setState({ films: film.results }))
  }

  render () {
    const { films } = this.state;
    console.log(films);
    return (
      <div className="App">
        <div className="App__header">
          <Logo />
          <p className="App__text">List of films</p>
          <FilmList films={films} />
        </div>
      </div>
    );
  }
}

export default App;