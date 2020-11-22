<!--
 * @Author: your name
 * @Date: 2020-11-20 08:42:56
 * @LastEditTime: 2020-11-20 08:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \doc-tina\demo-zheye\src\components\ColumnDetail.vue
-->
<template>
	<div class="column-detail-page w-75 mx-auto">
		<div
			class="column-info row mb-4 border-bottom pb-4 align-items-center"
			v-if="column"
		>
			<div class="col-3 text-center">
				<img
					:src="column.avatar"
					:alt="column.title"
					class="rounded-circle border w-100"
				/>
			</div>
			<div class="col-9">
				<h4>{{ column.title }}</h4>
				<p class="text-muted">{{ column.description }}</p>
			</div>
		</div>
		<post-list :list="list"></post-list>
	</div>
</template>

<script lang="ts">
import { GlobalDataProps } from '@/store'
import { defineComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PostList from '../components/PostList.vue'
export default defineComponent({
	setup() {
		const route = useRoute()
		const store = useStore<GlobalDataProps>()
		const currentId = +route.params.id
		const column = computed(() => store.getters.getColumnById(currentId))
		const list = computed(() => store.getters.getPostByCid(currentId))
		console.log(list)
		return {
			column,
			list,
		}
	},
	components: {
		PostList,
	},
})
</script>

<style></style>
