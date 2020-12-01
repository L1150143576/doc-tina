<!--
 * @Author: your name
 * @Date: 2020-11-11 18:49:43
 * @LastEditTime: 2020-11-26 14:19:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zheye\src\App.vue
-->
<template>
	<div>
		<global-header :user="user"></global-header>
		<column-list :list="list"></column-list>

		<router-view />
		<footer class="text-center py-4 text-secondary bg-light mt-6">
			<small>
				<ul class="list-inline mb-0">
					<li class="list-inline-item">© 2020 者也专栏</li>
					<li class="list-inline-item">课程</li>
					<li class="list-inline-item">文档</li>
					<li class="list-inline-item">联系</li>
					<li class="list-inline-item">更多</li>
				</ul>
			</small>
		</footer>
	</div>
</template>
<script lang="ts">
import { computed, defineComponent, watch } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'
import createMessage from './components/createMessage'
import { useStore } from 'vuex'
import { GlobalDataProps } from './store'
export default defineComponent({
	name: 'APP',
	setup() {
		const store = useStore<GlobalDataProps>()l
		const userData = computed(() => store.state.user)
		const isLoading = computed(() => store.state.loading)
		const error = computed(() => store.state.error)
		watch(
			() => error.value.status,
			() => {
				const { status, message } = error.value
				if (status && message) {
					createMessage(message, 'error')
				}
			}
		)
		return {
			user: userData,
		}
	},
	components: {
		GlobalHeader,
	},
})
</script>
<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
