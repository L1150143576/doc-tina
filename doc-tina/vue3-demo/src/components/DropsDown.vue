<!--
 * @Author: your name
 * @Date: 2020-11-16 18:54:20
 * @LastEditTime: 2020-11-26 14:18:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \doc-tina\doc-tina\demo-zheye\src\components\DropsDown.vue
-->
<!--  -->
<template>
	<div class="dropdown" ref="dropdownRef">
		<a
			href="#"
			class="btn btn-outline-light my-2 dropdown-toggle"
			@click.prevent="toggleOpen"
		>
			{{ title }}
		</a>
		<ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpten">
			<dropsdown-item :disabled="true"
				><router-link to="/create" class="dropdown-item"
					>新建文章</router-link
				></dropsdown-item
			>
			<dropsdown-item
				><a href="#" class="dropdown-item">编辑资料</a></dropsdown-item
			>
			<dropsdown-item
				><div class="dropdown-item" @click="logout">
					退出登录
				</div></dropsdown-item
			>
		</ul>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, onMounted, onUnmounted } from 'vue'
import DropsdownItem from './DropdownItem.vue'
import useClickOutside from '../hooks/useClickOutside'
import { useStore } from 'vuex'
export default defineComponent({
	props: {
		title: {
			type: String,
			required: true,
		},
	},
	components: { DropsdownItem },

	setup() {
		const store = useStore()
		const isOpten = ref(false)
		const toggleOpen = () => {
			isOpten.value = !isOpten.value
		}
		const dropdownRef = ref<null | HTMLElement>(null)
		const isClickOutside = useClickOutside(dropdownRef)
		const logout = () => {
			store.state.user.token = ''
			store.state.user = { isLogin: false }
		}
		watch(isClickOutside, () => {
			if (isOpten.value && isClickOutside.value) {
				isOpten.value = false
			}
		})

		return {
			isOpten,
			toggleOpen,
			logout,
			// 返回和 ref 同名的响应式对象，就可以拿到对应的 dom 节点
			dropdownRef,
		}
	},
})
</script>
<style lang="less" scoped>
.dropdown-item {
	cursor: pointer;
}
</style>
>
