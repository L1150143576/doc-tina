<!--
 * @Author: your name
 * @Date: 2020-11-17 15:22:12
 * @LastEditTime: 2020-11-19 17:26:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \doc-tina\doc-tina\demo-zheye\src\components\ValidateInput.vue
-->
<template>
	<div class="validate-input-container pb-3">
		<input
			v-if="tag != 'textarea'"
			type="text"
			class="form-control"
			:class="{ 'is-invalid': inputRef.error }"
			:value="inputRef.val"
			@input="updateValue"
			v-bind="$attrs"
		/>
		<textarea
			v-else
			class="form-control"
			:class="{ 'is-invalid': inputRef.error }"
			:value="inputRef.val"
			@input="updateValue"
			v-bind="$attrs"
		></textarea>
		<span v-if="inputRef.error" class="invalid-feedback">{{
			inputRef.message
		}}</span>
	</div>
</template>

<script lang="ts">
import { defineComponent, reactive, PropType, onMounted } from 'vue'
import { emitter } from './ValidateForm.vue'
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
interface RuleProp {
	type: 'required' | 'email'
	message: string
}
export type RulesProp = RuleProp[]
export type TagType = 'input' | 'textarea'
export default defineComponent({
	props: {
		rules: Array as PropType<RulesProp>,
		modalValue: String,
		tag: {
			type: String as PropType<TagType>,
			default: 'input',
		},
	},
	setup(props, context) {
		const inputRef = reactive({
			val: props.modalValue || '',
			error: false,
			message: '',
		})
		const updateValue = (e: KeyboardEvent) => {
			const targetValue = (e.target as HTMLInputElement).value
			inputRef.val = targetValue
			context.emit('update:modelValue', targetValue)
		}
		const validateInput = () => {
			if (props.rules) {
				const allPassed = props.rules.every((rule) => {
					let passed = true
					inputRef.message = rule.message
					switch (rule.type) {
						case 'required':
							passed = inputRef.val.trim() !== ''
							break
						case 'email':
							passed = emailReg.test(inputRef.val)
							break
						default:
							break
					}
					return passed
				})
				inputRef.error = !allPassed
				return allPassed
			}
			return true
		}
		onMounted(() => {
			emitter.emit('form-item-created', validateInput)
		})
		return {
			inputRef,
			validateInput,
			updateValue,
		}
	},
})
</script>
