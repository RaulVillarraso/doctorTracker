import api from './config'

export async function getSeasons(){
  const { data } = await api.get(`/todos`)
  return data
}