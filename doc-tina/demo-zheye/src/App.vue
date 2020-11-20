<!--
 * @Author: your name
 * @Date: 2020-11-11 18:49:43
 * @LastEditTime: 2020-11-20 09:06:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zheye\src\App.vue
-->
<template>
	<div class="container">
		<global-header :user="user"></global-header>
		<column-list :list="list"></column-list>
		<footer></footer>
		<router-view />
	</div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue'

const userData: UserProps = {
	isLogin: true,
	name: 'Tina',
	id: 158656
}

export default defineComponent({
	name: 'APP',
	setup() {
		return {
			user: userData
		}
	},
	components: {
		GlobalHeader
	}
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
