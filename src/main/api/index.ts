import axios from 'axios'

const api = axios.create({
  baseURL: `https://estudantinder-api-dev.herokuapp.com/`,
})

export default api
