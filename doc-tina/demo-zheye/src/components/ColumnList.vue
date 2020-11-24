<template>
	<div class="row">
		<div v-for="column in list" :key="column._id" class="col-4 mb-4">
			<div class="card h-100 shadow-sm">
				<div class="card-body text-center">
					<img
						:src="column.avatar.url"
						:alt="column.title"
						class="rounded-circle border border-light w-25 my-3"
					/>
					<h5 class="card-title">{{ column.title }}</h5>
					<p class="card-text text-left">{{ column.description }}</p>
					<router-link
						:to="`/detail/${column._id}`"
						class="btn btn-outline-primary"
						>进入专栏</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, PropType,onMounted,computed} from 'vue'
import {getColumn} from "@/api"
export interface ColumnsProps {
	_id: number
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

})
</script>
