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
					:src="column.avatar && column.avatar.url"
					:alt="column.title"
					class="rounded-circle border w-50"
				/>
			</div>
			<div class="col-9">
				<h4>{{ column.title }}</h4>
				<span>{{ column.createdAt }}</span>
				<div class="text-muted">{{ column.description }}</div>
			</div>
		</div>
		<post-list :list="post" :num="2"></post-list>
	</div>
</template>

<script lang="ts">
import { GlobalDataProps } from '@/store'
import { defineComponent, computed, reactive, toRefs, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import PostList from '../components/PostList.vue'
import { getArticle, getPosts } from '@/api'

export default defineComponent({
	setup() {
		const route = useRoute()
		const store = useStore<GlobalDataProps>()
		const state = reactive({
			currentId: '',
			column: {},
			post: [],
		})
		state.currentId = route.params.id.toString()
		// const column = computed(() => store.getters.getColumnById(currentId))
		const getDetail = async () => {
			state.column = await getArticle(state.currentId)
		}
		const getPost = async () => {
			const res = await getPosts(state.currentId, 1, 10)
			state.post =res.list
		}
		const list = computed(() => store.getters.getPostByCid(state.currentId))
		onMounted(async () => {
			Promise.all([	await getDetail(),		await getPost()])
		})

		return {
			...toRefs(state),
			list,
		}
	},
	components: {
		PostList,
	},
})
</script>

<style></style>
