<!--
 * @Author: your name
 * @Date: 2020-11-11 18:49:43
 * @LastEditTime: 2020-11-17 17:26:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zheye\src\App.vue
-->
<template>
  <div class='container'>
    <global-header :user="user"></global-header>
    <form action="">
      <div class="mb-3"><label class="form-label">邮箱地址</label>
        <validate-input :rules="emailRules" v-model="emailVal"></validate-input>
       {{emailVal}}
      </div>
      <div class="mb-3">
        <label
          for="exampleInputEmail1"
          class="form-label"
        >邮箱地址</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          v-model="emailRef.val"
          @blur="validateEmail"
        >
        <div
          class="form-test"
          v-if="emailRef.err"
        >{{emailRef.message}}</div>

      </div>
      <div class="mb-3">
        <label
          for="exampleInputPassword1"
          class="form-label"
        >密码</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
      >Submit</button>
    </form>

  </div>
</template>
<script lang='ts'>
import { defineComponent, reactive,ref } from "vue";
import "bootstrap/dist/css/bootstrap.min.css";
import ColumnList, { ColumnsProps } from "./components/ColumnList.vue";
import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";

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
    const emailVal = ref("Tina")
    const emailRef = reactive({
      val: "",
      err: false,
      message: "",
    });
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
      emailRules,
      emailVal,
      validateEmail,
    };
  },
  components: {
    ValidateInput,
    GlobalHeader,
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
