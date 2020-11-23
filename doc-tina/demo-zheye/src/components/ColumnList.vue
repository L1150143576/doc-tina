<template>
	<div class="row">
		<div v-for="column in list" :key="column.id" class="col-4 mb-4">
			<div class="card h-100 shadow-sm">
				<div class="card-body text-center">
					<img
						:src="column.avatar"
						:alt="column.title"
						class="rounded-circle border border-light w-25 my-3"
					/>
					<h5 class="card-title">{{ column.title }}</h5>
					<p class="card-text text-left">{{ column.description }}</p>
					<router-link
						:to="`/detail/${column.id}`"
						class="btn btn-outline-primary"
						>进入专栏</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType,onMounted } from 'vue'
import {getColumn} from "@/api"
export interface ColumnsProps {
	id: number
	title: string
	avatar: string
	description: string
}
export default defineComponent({
	name: 'ColumnList',
	props: {
		list: {
			type: Array as PropType<ColumnsProps[]>,
			required: true
		}
	},
	setup (props) {
		const getColumnList=async ()=>{
			const res=await getColumn({pageindex:1})
			console.log(res)
		}
	onMounted(()=>{
  getColumnList()
	})
	return {
		getColumn
	}
	}
})
</script>
