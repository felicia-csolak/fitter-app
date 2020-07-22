import api from './api-config'

const baseUrl = process.env.NODE_ENV === 'production' ? 'https://git.heroku.com/fitter-api.git' : 'http://localhost:3000' 


export const getPosts = async () => {
  const response = await api.get('/posts')
  return response.data
}

export const getPost = async (id) => {
  const response = await api.get(`/posts/${id}`)
  return response.data
}

export const createPost = async (postData) => {
  const response = await api.post(`/posts`, { post: postData })
  return response.data
}

export const putPost = async (id, postData) => {
  const response = await api.put(`/posts/${id}`, { post: postData })
  return response.data;
}

export const deletePost = async (id) => {
  const response = await api.delete(`/posts/${id}`);
  return response
}

export const getUser = async (id) => {
  const response = await api.get(`/users/${id}`)
  return response.data
}

export const getComments = async (id) => {
  const response = await api.get(`/posts/${id}/comments`)
  return response.data
}

export const createComment = async (id, commentData) => {
  const response = await api.post(`/posts/${id}/comments`, { content: commentData })
  return response.data
}


export default api