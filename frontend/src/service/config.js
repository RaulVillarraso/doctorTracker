import axios from 'axios'

const api = axios.create({
  baseURL: 'https://doctortracker.onrender.com/api'
})

export default api