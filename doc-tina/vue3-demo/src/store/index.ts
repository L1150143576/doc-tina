/*
 * @Author: your name
 * @Date: 2020-11-16 18:23:57
 * @LastEditTime: 2020-11-26 11:04:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \doc-tina\doc-tina\demo-zheye\src\store\index.ts
 */
import { createStore } from 'vuex'
import { testData, testPosts, columnProps } from "../mock/testData"
import createPersistedState from "vuex-persistedstate";
export interface ResponseType<P = {}> {
  code: number;
  msg: string;
  data: P;
}
export interface userProps {
  isLogin: boolean;
  nickName?: string;
  _id?: string;
  column?: string;
  email?: string;
  token?: string;
  avatar?: ImageProps;
  description?: string;
}
export interface ColumnProps {
  _id: string;
  title: string;
  avatar?: ImageProps;
  description: string;
}
export interface ImageProps {
  _id?: string,
  url?: string,
  createdA?: string,
  fitUrl?: string;
}
export interface GlobalErrorProps {
  status: boolean;
  message?: string;
}
export interface GlobalDataProps {
  columns: columnProps[],
  user: userProps,
  error: GlobalErrorProps,
  token: string;
}
export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  createdAt?: string;
  image?: ImageProps | string;
  columnId?: number;
  column: string;
  author?: string | userProps;
  isHTML?: boolean;
}
export default createStore<GlobalDataProps>({
  state: {
    columns: testData,
    user: { isLogin: false },
    error: { status: false },
    token: ''

  },
  getters: {
    biggerColumnLen(state) {
      return state.columns.filter((c) => c.id > 2).length
    },

    token: (state) => state.user.token
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, nickName: 'Tina' }

    },
    setUser(state, user) {
      state.user = { ...state.user, ...user }
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
