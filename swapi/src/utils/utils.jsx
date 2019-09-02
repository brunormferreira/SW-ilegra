import axios from 'axios'

export function asyncCall() {
  return new Promise((resolve) => setTimeout(() => resolve(), 3000));
}

export function getFilms() {
  let baseUrl = 'https://swapi.co/api'
  let query = '/films/'
  return axios({
    methos: 'GET',
    url: baseUrl + query
  })
}
