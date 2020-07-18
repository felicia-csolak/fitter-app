import api from './api-config'

export const getPosts = async () => {
  const response = await api.get('/posts')
  return response.data
}

export const getPost = async (id) => {
  const response = await api.get(`/posts/${id}`)
  return response.data
}

export const createPost = async (postInfo) => {
  const response = await api.post(`/posts`, { post: postInfo })
  return response.data
}

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`)
  return response.data
}

export const getComments = async (id) => {
  const response = await api.get(`/posts/${id}/comments`)
  return response.data
}


export default api