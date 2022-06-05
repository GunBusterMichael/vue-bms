import axios from 'axios'

const request = axios.create({
  baseURL: '/api/api',
  timeout: 50000
})

request.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Promise.reject(error)
  }
)

request.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    console.log(error);
  }
)

export default request