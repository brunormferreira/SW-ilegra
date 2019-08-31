import React, { Component } from 'react';
import './App.css';

import { Logo } from '../components/Logo/Logo'
import { Footer } from '../components/Footer/Footer'
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
        <Logo />
        <p className="App__title">List of films</p>
        <FilmList films={films} />
        <Footer />
      </div>
    );
  }
}

export default App;