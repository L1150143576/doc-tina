<!--
 * @Author: your name
 * @Date: 2020-11-20 08:42:56
 * @LastEditTime: 2020-11-20 08:46:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \doc-tina\demo-zheye\src\components\ColumnDetail.vue
-->
<template>
  <div><pre>{{route}}</pre></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {useRoute} from "vue-router"
export default defineComponent({
  setup(){
    const route=useRoute()
    return {
      route
    }
  }
})
</script>

<style>

</style>