import axios from 'axios'

const api = axios.create({
  baseURL: `https://estudantinder-api.herokuapp.com`,
})

export default api
