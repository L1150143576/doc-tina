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
		<column-list :list="list"></column-list>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ColumnList, { ColumnsProps } from '../components/ColumnList.vue'
const testData: ColumnsProps[] = [
	{
		id: 1,
		title: 'test1的专栏',
		description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
		avatar:
			'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
	},
	{
		id: 2,
		title: 'test2的专栏',
		description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
		avatar:
			'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
	},
	{
		id: 3,
		title: 'test3的专栏',
		description: '这是的test3专栏，有一段非常有意思的简介，可以更新一下欧',
		avatar:
			'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
	}
]
export default defineComponent({
	name: 'Home',
	setup() {
		return {
			list: testData
		}
	},
	components: {
		ColumnList
	}
})
</script>
