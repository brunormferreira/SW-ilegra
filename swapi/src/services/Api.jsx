import axios from 'axios'

export function getFilms() {
  let baseUrl = 'https://swapi.co/api'
  let query = '/films/'
  return axios({
    methos: 'GET',
    url: baseUrl + query
  })
}
