<template>
  <div id="app">
    <h2>News-content</h2>
    <p>NewsId:{{ $route.params.id }}</p>
    <ul>
      <li><nuxt-link to="/">HOME</nuxt-link></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      title: this.$route.params.title
    };
  },
  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "news1", content: "This is news" }]
    };
  },
  components: {}
};
</script>

<style lang="less" scoped></style>
