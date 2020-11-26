<!--
 * @Author: your name
 * @Date: 2020-11-11 18:49:43
 * @LastEditTime: 2020-11-26 13:55:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zheye\src\views\Home.vue
-->
<template>
	<div class="home">
		<column-list :list="list"></column-list>
	</div>
</template>

<script lang="ts">
import {
	computed,
	defineComponent,
	onMounted,
	reactive,
	ref,
	toRefs,
} from 'vue'
import { getColumn } from '@/api'
import ColumnList, { ColumnsProps } from '../components/ColumnList.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
export default defineComponent({
	name: 'Home',
	setup() {
		const store = useStore<GlobalDataProps>()
		const state = reactive({
			list: [],
		})

		const testData = computed(() => store.state.columns)
		// const biggerColunm = computed(() => store.getters.biggerColumnLen)
		const getColumnList = async () => {
			const res = await getColumn({ pageindex: 1 })
			state.list = res.list
			console.log(state.list)
		}
		onMounted(async () => {
			await getColumnList()
		})
		const refData = toRefs(state)
		return {
			...refData,
		}
	},
	components: {
		ColumnList,
	},
})
</script>
