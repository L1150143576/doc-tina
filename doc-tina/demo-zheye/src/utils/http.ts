import axios from 'axios'
import { showFullScreenLoading, tryHideFullScreenLoading, paramFilter } from './emun'
const request = axios.create({
  baseURL: "/api"
})
/**
 * 添加请求拦截
 */

request.interceptors.request.use(
  (config: any) => {
      console.log('object', config)
      if (config.showLoading) {
          showFullScreenLoading()
      }
      return config
  },
  err => {
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
      if (error && error.response) {
          switch (error.response.status) {
              case 400:
                  error.message = '错误请求'
                  break
              case 401:
                  error.message = '未授权，请重新登录'
                  break
              case 403:
                  error.message = '拒绝访问'
                  break
              case 404:
                  error.message = '请求错误,未找到该资源'
                  break
              case 405:
                  error.message = '请求方法未允许'
                  break
              case 408:
                  error.message = '请求超时'
                  break
              case 500:
                  error.message = '服务器端出错'
                  break
              case 501:
                  error.message = '网络未实现'
                  break
              case 502:
                  error.message = '网络错误'
                  break
              case 503:
                  error.message = '服务不可用'
                  break
              case 504:
                  error.message = '网络超时'
                  break
              case 505:
                  error.message = 'http版本不支持该请求'
                  break
              default:
                  error.message = `连接错误${error.response.status}`
          }
      } else {
          error.message = '连接到服务器失败'
      }
      return Promise.reject(error.message)
  }
)
export default request