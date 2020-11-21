import { createStore } from 'vuex'
import {testData,testPosts,columnProps,PostProps} from "../mock/testData"
interface userProps{
  isLogin:boolean,
  name?:string,
  id?:number
}
export interface GlobalDataProps{
  columns:columnProps[],
  posts:PostProps[],
  user:userProps
}
export default createStore<GlobalDataProps>({
  state: {
    columns:testData,
    posts:testPosts,
    user:{isLogin:false}

  },
  mutations: {
    login(state){
      state.user={...state.user,isLogin:true,name:'JSTina'}
    }
  },
  actions: {
  },
  modules: {
  }
})
  