<template>
	<div class="create-post-page">
		<h4>{{ isEditMode ? '编辑文章' : '新建文章' }}</h4>
		<uploader
			action="/upload"
			:beforeUpload="uploadCheck"
			@file-uploaded="handleFileUploaded"
			:uploaded="uploadedData"
			class="d-flex align-items-center justify-content-center bg-light text-secondary w-100 my-4"
		>
			<h2>点击上传头图</h2>
			<template #loading>
				<div class="d-flex">
					<div class="spinner-border text-secondary" role="status">
						<span class="sr-only">Loading...</span>
					</div>
					<h2>正在上传</h2>
				</div>
			</template>
			<template #uploaded="dataProps">
				<div class="uploaded-area">
					<img :src="dataProps.uploadedData.url" />
					<h3>点击重新上传</h3>
				</div>
			</template>
		</uploader>
		<validate-form @form-submit="onFormSubmit">
			<div class="mb-3">
				<label class="form-label">文章标题：</label>
				<validate-input
					:rules="titleRules"
					v-model="titleVal"
					:modalValue="titleVal"
					placeholder="请输入文章标题"
					type="text"
				/>
			</div>
			<div class="mb-3">
				<label class="form-label">文章详情：</label>
				<validate-input
					rows="10"
					tag="textarea"
					placeholder="请输入文章详情"
					:rules="contentRules"
					v-model="contentVal"
					:modalValue="contentVal"
				/>
			</div>
			<template #submit>
				<button class="btn btn-primary btn-large">
					{{ isEditMode ? '更新文章' : '发表文章' }}
				</button>
			</template>
		</validate-form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, toRefs } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import { GlobalDataProps, PostProps, ResponseType, ImageProps } from '../store'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ValidateForm from '../components/ValidateForm.vue'
import Uploader from '../components/Uploader.vue'
import createMessage from '../components/createMessage'
import { createPost, getPost, updatePost } from '../api'
import { beforeUploadCheck } from '../help'
export default defineComponent({
	name: 'Login',
	components: {
		ValidateInput,
		ValidateForm,
		Uploader,
	},
	setup() {
		const uploadedData = ref()
		const state = reactive({
			contentVal: '',
		})
		const titleVal = ref('测试标题')
		const router = useRouter()
		const route = useRoute()
		const isEditMode = !!route.query.id
		const store = useStore<GlobalDataProps>()
		let imageId = ''
		const titleRules: RulesProp = [
			{ type: 'required', message: '文章标题不能为空' },
		]

		const contentRules: RulesProp = [
			{ type: 'required', message: '文章详情不能为空' },
		]
		const getCurrentPost = async () => {
			const rawData: PostProps = await getPost(route.query.id)
			const currentPost = rawData
			if (currentPost.image) {
				uploadedData.value = currentPost.image
			}
			titleVal.value = currentPost.title
			state.contentVal = currentPost.content || ''
			console.log(titleVal.value)
		}
		onMounted(() => {
			if (isEditMode) {
				getCurrentPost()
			}
		})
		const handleFileUploaded = (rawData: ImageProps) => {
			if (rawData._id) {
				imageId = rawData._id
			}
		}
		const onFormSubmit = async (result: boolean) => {
			if (result) {
				const { column, _id } = store.state.user
				if (column) {
					const newPost: PostProps = {
						title: titleVal.value,
						content: state.contentVal,
						column,
						author: _id,
					}
					if (imageId) {
						newPost.image = imageId
					}
					const actionName = isEditMode ? 'updatePost' : 'createPost'
					const sendData = isEditMode
						? {
								id: route.query.id,
								payload: newPost,
						  }
						: newPost
					try {
						isEditMode
							? await updatePost(route.query.id, newPost)
							: await createPost(sendData)
						createMessage('发表成功，2秒后跳转到文章', 'success', 2000)
						setTimeout(() => {
							router.push({ name: 'Detail', params: { id: column } })
						}, 2000)
					} catch (err) {
						console.log(err)
					}
				}
			}
		}
		const uploadCheck = (file: File) => {
			const result = beforeUploadCheck(file, {
				format: ['image/jpeg', 'image/png'],
				size: 1,
			})
			const { passed, error } = result
			if (error === 'format') {
				createMessage('上传图片只能是 JPG/PNG 格式!', 'error')
			}
			if (error === 'size') {
				createMessage('上传图片大小不能超过 1Mb', 'error')
			}
			return passed
		}
		return {
			titleRules,
			titleVal,
			...toRefs(state),
			contentRules,
			onFormSubmit,
			uploadCheck,
			handleFileUploaded,
			uploadedData,
			isEditMode,
		}
	},
})
</script>
<style>
.create-post-page .file-upload-container {
	height: 200px;
	cursor: pointer;
	overflow: hidden;
}
.create-post-page .file-upload-container img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.uploaded-area {
	position: relative;
}
.uploaded-area:hover h3 {
	display: block;
}
.uploaded-area h3 {
	display: none;
	position: absolute;
	color: #999;
	text-align: center;
	width: 100%;
	top: 50%;
}
</style>
