import  request from "@/utils/http"
import {PostProps} from "../store"


/**
 * 获取列表接口
 * @param params 
 */
export const getColumn=({pageindex=1,pagenum=10})=>request({
  url:`/columns?currentPage=${pageindex}&pageSize=${pagenum}`,
})

/**
 * 
 * @param  id  获取专栏详情
 */
export const getArticle=(id='')=>request({
  url:`/columns/${id}`
})


/**
 *  获取属于该文章下得文章列表
 * @param id 文章id
 * @param page
 * @param size
 */
export const getPosts=(id="",page=1,size=10)=>request({
  url:`/columns/${id}/posts?currentPage=${page}&pageSize=${size}  `
})

/**
 * 新建用户
 * @param payload 
 */
export const addUser=(payload:Object)=>request({
  url:`/users`,
  method:'POST',
  data:payload

})

/**
 * 用户登录
 * @param payload 
 */
export const login=(payload:Object)=>request({
  url:`/user/login`,
  method:'POST',
  data:payload

})

/**
 * 获取当前用户登录信息
 */
export const getUserInfo=()=>request({
  url:'/user/current',
})


/**
 * 上传
 * @param url  地址
 * @param formdata  file数据
 */
export const upload=(url:string,formdata:FormData)=>request({
  url:url,
  method:'post',
  data:formdata,
  headers: {
    'Content-Type': 'multipart/form-data',
  },
})

/**
 * 
 * @param form 创建文章
 */
export const createPost=(form={})=>request({
  url:'/posts',
 method:'post',
 data:form
})