<template>
	<validate-form action="" @form-submit="submit" ref="inputRef">
		<div class="mb-3">
			<label class="form-label">邮箱地址</label>
			<validate-input
				:rules="emailRules"
				v-model="emailVal"
				placeholder="请输入相对的值"
				:modalValue="emailVal"
				type="text"
			></validate-input>
			{{ emailVal }}
		</div>

		<div class="mb-3">
			<label for="exampleInputPassword1" class="form-label">密码</label>
			<validate-input
				:rules="emailRules"
				v-model="emailVal"
				placeholder="请输入相对的值"
				type="text"
			></validate-input>
		</div>
		<template #submit>
			<span class="btn btn-danger">Submit</span>
		</template>
	</validate-form>
</template>
<script lang="ts">
import { defineComponent, reactive, ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput, { RulesProp } from '../components/ValidateInput.vue'
import ColumnList, { ColumnsProps } from '../components/ColumnList.vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '../store'
const emailRules: RulesProp = [
	{ type: 'required', message: '电子邮箱地址不能为空' },
	{ type: 'email', message: '请输入正确的电子邮箱格式' },
]
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

export default defineComponent({
	setup() {
		const store = useStore<GlobalDataProps>()
		const inputRef = ref<any>()
		const emailVal = ref('')
		const emailRef = reactive({
			val: '',
			err: false,
			message: '',
		})
		const router = useRouter()
		const submit = (e: boolean) => {
			if (e) {
				store.commit('login')
				router.push('/')
			}
		}
		const validateEmail = () => {
			if (emailRef.val.trim() === '') {
				emailRef.err = true
				emailRef.message = '邮箱地址错误~'
			} else if (!emailReg.test(emailRef.val)) {
				emailRef.err = true
				emailRef.message = '请输入正确邮箱'
			}
		}
		return {
			emailRef,
			inputRef,
			emailRules,
			submit,
			emailVal,
			validateEmail,
		}
	},
	components: {
		ValidateInput,
		ValidateForm,
	},
})
</script>
