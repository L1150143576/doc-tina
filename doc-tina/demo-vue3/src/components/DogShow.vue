<template>
  <img :src="result && result.message" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  async setup() {
    const res = await axios.get("https://dog.ceo/api/breeds/image");
    console.log(res.data.message);
    return {
      result: res.data,
    };
  },
});
</script>