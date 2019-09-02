import React, { Component } from 'react';
import './App.css';

import axios from 'axios'

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
    this.getFilms();
  }

  getFilms() {
    let baseUrl = 'https://swapi.co/api'
    let query = '/films/'
    axios.get(baseUrl + query)
      .then(film => this.setState({ films: film.data.results })).catch(err => console.log(err));
  }

  render () {
    const { films, loading } = this.state;
    if(loading) {
      return null;
    }
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
  return new Promise((resolve) => setTimeout(() => resolve(), 3000));
}

export default App;