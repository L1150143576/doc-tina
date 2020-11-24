import  request from "@/utils/http"
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