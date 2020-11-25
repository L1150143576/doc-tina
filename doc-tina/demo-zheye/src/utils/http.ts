import axios from 'axios'
import { showFullScreenLoading, tryHideFullScreenLoading, paramFilter } from './emun'
import store from '../store'
import createMessage from '@/components/createMessage'
const request = axios.create({
  baseURL: "/api"
})
/**
 * 添加请求拦截
 */

request.interceptors.request.use(
  (config: any) => {

    const token = store.getters['token']
      if (config.showLoading) {
          showFullScreenLoading()
      }
          // header 添加 token
    if (token) config.headers. common.Authorization=`Bearer ${token}`
      return config
  },
  err => {
    const { error } = err.response.data
    store.commit('setError', { status: true, message: error })
      return Promise.reject(err)
  }
)

/**
* 响应拦截
*/

request.interceptors.response.use(
  (response: any) => {
      if (response.config.showLoading) {
          tryHideFullScreenLoading()
      }
      const resultCode = Number(response.data.code) 
     
      if (resultCode === 0) return response.data.data
      return response
  },
  error => {
      tryHideFullScreenLoading()
    
        const { err } = error.response.data
        console.log(error)
        store.commit('setError', { status: true, message: err })
      
      return Promise.reject(error.message)
  }
)
export default request