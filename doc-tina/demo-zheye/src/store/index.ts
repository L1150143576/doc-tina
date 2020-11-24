import { createStore } from 'vuex'
import { testData, testPosts, columnProps } from "../mock/testData"
interface userProps {
  isLogin: boolean,
  name?: string,
  id?: number,
  columnId?: number
}
interface ImageProps {
  _id?: string,
  url?: string,
  createdA?: string
}
export interface GlobalDataProps {
  columns: columnProps[],
  user: userProps
}
export interface PostProps {
  _id?: string;
  title: string;
  excerpt?: string;
  content?: string;
  createdAt?: string;
  image:ImageProps,
  columnId?: number;
  isHTML?: boolean;
}
export default createStore<GlobalDataProps>({
  state: {
    columns: testData,
    user: { isLogin: true, name: 'JSTina', columnId: 1 }

  },
  getters: {
    biggerColumnLen(state) {
      return state.columns.filter((c) => c.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find(c => c.id == id)
    },
    getPostByCid: (state) => (cid: number) => {
      return state.posts.filter(c => c.columnId == cid)
    }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'JSTina' }

    },
    createPost(state, newPost) {
      state.posts.push(newPost)
    }
  },
  actions: {
  },
  modules: {
  }
})
