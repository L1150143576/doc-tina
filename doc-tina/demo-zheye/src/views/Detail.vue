<!--  -->
<template>
	<column-detail></column-detail>
</template>

<script lang="ts">
import ColumnDetail from '@/components/ColumnDetail.vue'
import { defineComponent } from 'vue'
export default defineComponent({
	setup() {
		return {
			ColumnDetail
		}
	},
	components: { ColumnDetail }
})
</script>
<style lang="less" scoped>
//@import url(); 引入公共css类
</style>
