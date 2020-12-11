/*
 * @Author: your name
 * @Date: 2020-11-23 16:02:38
 * @LastEditTime: 2020-11-26 13:59:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \doc-tina\doc-tina\demo-zheye\src\utils\http.ts
 */
import axios from 'axios'
import { showFullScreenLoading, tryHideFullScreenLoading, paramFilter } from './emun'
import store from '../store'
import createMessage from '@/components/createMessage'
const request = axios.create({
  baseURL: "/test"
})
/**
 * 添加请求拦截
 */

request.interceptors.request.use(
  (config: any) => {
    const { withBaseURL = true } = config
    const token = store.getters['token']
    if (config.showLoading) {
      showFullScreenLoading()
    }
    // header 添加 token
    if (token) config.headers.common.Authorization = `Bearer ${token}`
    // 添加 baseURL
    if (withBaseURL) config.baseURL += "/api"
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