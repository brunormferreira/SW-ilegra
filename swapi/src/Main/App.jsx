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
        <header className="App-header">
          <Logo />
          <p className="App-text">start project swapi - Bruno Ramires</p>
        </header>
        <FilmList films={films} />
      </div>
    );
  }
}

export default App;