<template>
	<div class="post-list">
		<article v-for="post in list" :key="post._id" class="card mb-3 shadow-sm">
			<div class="card-body">
				<h4 @click="handleRoute(post._id)">
					{{ post.title }}
				</h4>
				<div class="row my-3 align-items-center">
					<div v-if="post.image" class="col-4">
						<img
							:src="post.image && post.image.url"
							:alt="post.title"
							class="rounded-lg w-100"
						/>
					</div>
					<p :class="{ 'col-8': post.image }" class="text-muted">
						{{ post.content }}
					</p>
				</div>
				<span class="text-muted">{{ post.createdAt }}</span>
			</div>
		</article>
	</div>
</template>
<script lang="ts">
import { defineComponent, PropType, computed, reactive, toRefs } from 'vue'
import { PostProps } from '../mock/testData'
import { useRouter } from 'vue-router'
export default defineComponent({
	props: {
		list: {
			type: Array as PropType<PostProps[]>,
			required: true,
		},
		num: {
			type: Number,
		},
	},
	setup(props) {
		const router = useRouter()
		const handleRoute = (_id: string) => {
			console.log(_id)
			router.push({ name: 'postDetail', params: { id: _id } })
		}
		return {
			handleRoute,
		}
	},
})
</script>
