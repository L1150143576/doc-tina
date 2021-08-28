<template>
  <div>
    <p v-if="(error.statsusCode = 404)">404 NOT FOUND</p>
    <p v-else>500,服务器错误</p>
  </div></template
>
<script>
export default {
  props: ["error"]
};
</script>
