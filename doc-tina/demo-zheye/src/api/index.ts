import  request from "@/utils/http"
/**
 * 获取列表接口
 * @param params 
 */
export const getColumn=({pageindex=1,pagenum=10})=>request({
  url:`/columns?currentPage=${pageindex}&pageSize=${pagenum}`,
})