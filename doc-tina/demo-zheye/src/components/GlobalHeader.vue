<!--
 * @Author: your name
 * @Date: 2020-11-16 07:47:29
 * @LastEditTime: 2020-11-16 18:31:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zheye\src\components\GlobalHeader.vue
-->
<template>
	<nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
		<a class="navbar-brand" href="#">者也专栏</a>
		<ul v-if="!user.isLogin" class="list-inline mb-0">
			<li class="list-inline-item">
				<router-link to="/login" class="btn btn-outline-light my-2"
					>登陆</router-link
				>
			</li>
			<li class="list-inline-item">
				<a href="#" class="btn btn-outline-light my-2">注册</a>
			</li>
		</ul>
		<ul v-else class="list-inline mb-0">
			<li class="list-inline-item">
				<drops-down :title="`你好,${user.name}`"></drops-down>
			</li>
		</ul>
	</nav>
</template>

<script lang="ts">
import DropsDown from './DropsDown.vue'
import { defineComponent, PropType } from 'vue'
export interface UserProps {
	isLogin: boolean
	name?: string
	id?: number
}
export default defineComponent({
	props: {
		user: {
			type: Object as PropType<UserProps>,
			required: true,
		},
	},
	components: {
		DropsDown,
	},
})
</script>

<style></style>
