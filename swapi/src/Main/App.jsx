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
      loading: true
    };
  }

  componentDidMount() {
    asyncCall().then(() => this.setState({ loading: false }));
    fetch('https://swapi.co/api/films/')
      .then(response => response.json())
      .then(film => this.setState({ films: film.results }))
  }

  render () {
    const { films, loading } = this.state;
    if(loading) {
      return null;
    }
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

function asyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 2500));
}

export default App;