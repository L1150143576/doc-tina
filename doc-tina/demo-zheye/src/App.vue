<!--
 * @Author: your name
 * @Date: 2020-11-11 18:49:43
 * @LastEditTime: 2020-11-19 17:29:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zheye\src\App.vue
-->
<template>
  <div class='container'>
    <global-header :user="user"></global-header>
    <validate-form action=""  @form-submit="submit" ref="inputRef">
      <div class="mb-3"><label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入相对的值" :modalValue="emailVal" type="text"></validate-input>
       {{emailVal}}
      </div>
     
      <div class="mb-3">
        <label
          for="exampleInputPassword1"
          class="form-label"
        >密码</label>
            <validate-input :rules="emailRules" v-model="emailVal" placeholder="请输入相对的值" type="text"></validate-input>
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
      <!-- <button
        type="submit"
        class="btn btn-primary"
      >Submit</button> -->


  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive,ref,onMounted } from "vue";

import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnsProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";
import ValidateForm from "./components/ValidateForm.vue"
import ValidateInput, { RulesProp } from "./components/ValidateInput.vue";
const userData: UserProps = {
  isLogin: true,
  name: "Tina",
  id: 158656,
};
const emailRules: RulesProp = [
  { type: 'required', message: '电子邮箱地址不能为空' },
  { type: 'email', message: '请输入正确的电子邮箱格式' }
]
const emailReg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export default defineComponent({
  name: "APP",
  setup() {
    const inputRef=ref<any>()
    const emailVal = ref("")
    const emailRef = reactive({
      val: "",
      err: false,
      message: "",
    });
   
    const submit=(e: boolean)=>{
      console.log(inputRef.value)
      console.log("result："+e)
    }
    const validateEmail = () => {
      if (emailRef.val.trim() === "") {
        emailRef.err = true;
        emailRef.message = "邮箱地址错误~";
      } else if (!emailReg.test(emailRef.val)) {
        emailRef.err = true;
        emailRef.message = "请输入正确邮箱";
      }
    };
    return {
      user: userData,
      emailRef,
      inputRef,
      emailRules,
       submit,
      emailVal,
      validateEmail,
    };
  },
  components: {
   
    ValidateInput,
    GlobalHeader,
    ValidateForm
  },
});
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
