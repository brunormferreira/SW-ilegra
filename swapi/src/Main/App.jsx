import React, { Component } from 'react';
import './App.css';

import { Logo } from '../components/Logo/Logo'
import { Footer } from '../components/Footer/Footer'
import { FilmList } from '../components/Films/Films-list'
import { Title } from '../components/Title/Title'

import { asyncCall } from '../utils/utils'
import { getFilms } from '../services/Api'

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
    getFilms().then(film => this.setState({ films: film.data.results })).catch(err => console.log(err));
  }

  render () {
    const { films, loading } = this.state;
    if(loading) {
      return null;
    }
    return (
      <div className="App">
        <Logo />
        <Title />
        <FilmList films={films} />
        <Footer />
      </div>
    );
  }
}

export default App;