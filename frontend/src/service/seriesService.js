import api from './config'

export async function getSeasons(){
  const { data } = await api.get(`/seasons`)
  return data
}

export async function checkWatched(id, episode){
  const { data } = await api.put(`/seasons/check/${id}/${episode}`)
  return data
}