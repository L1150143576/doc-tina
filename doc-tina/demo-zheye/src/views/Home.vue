<!--
 * @Author: your name
 * @Date: 2020-11-11 18:49:43
 * @LastEditTime: 2020-11-11 19:02:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zheye\src\views\Home.vue
-->
<template>
	<div class="home">
		<h2>{{ biggerColunm }}</h2>
		<column-list :list="list"></column-list>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

import ColumnList, { ColumnsProps } from '../components/ColumnList.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store/index'
export default defineComponent({
	name: 'Home',
	setup() {
		const store = useStore<GlobalDataProps>()
		const testData = computed(() => store.state.columns)
		const biggerColunm = computed(() => store.getters.biggerColumnLen)
		return {
			list: testData,
			biggerColunm,
		}
	},
	components: {
		ColumnList,
	},
})
</script>
