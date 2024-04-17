import api from './config.js'

export const login = async (loginData) => {
  const { data } = await api.post('/auth/login', loginData)
  localStorage.token = data.token
  return data
}

export const signup = async (signupData) => {
  const { data } = await api.post('/auth/signup', signupData)
  localStorage.token = data.token
  return data
}