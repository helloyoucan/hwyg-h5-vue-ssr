import axios from 'axios'
// import Cookies from 'js-cookie'
// 创建axios实例
const service = axios.create({
  timeout: 15000, // 请求超时时间15s
  // eslint-disable-next-line no-constant-condition
  // baseURL: true || process.env.NODE_ENV === 'production' ? '/graphql' : '',
  // baseURL: process.client ? '/graphql' : 'http://helloyoucan.com:9090',
  headers: {
    'Cache-Control': 'no-cache',
    'If-Modified-Since': '0',
    'Content-Type': 'application/graphql'
  }
})

// request拦截器
service.interceptors.request.use((config) => {
  return config
}, (error) => {
  // eslint-disable-next-line no-console
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const _schema = response.data._schema
    if (_schema.code !== 'success') {
      return Promise.reject(_schema)
    }
    return response.data
  },
  (error) => {
    // eslint-disable-next-line no-console
    console.log(`err:${error}`) // for debug
    return error.response ? Promise.reject(error.response.data) : Promise.reject(error.response)
  }
)

export default service
