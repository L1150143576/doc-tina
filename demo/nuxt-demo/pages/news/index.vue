<template>
  <div id="app">
    <h2>news index page{{ $route.params.newID }}</h2>
    <img src="~static/login.png" />
    <ul>
      <li><nuxt-link to="/">HOME</nuxt-link></li>
      <li>
        <nuxt-link
          :to="{ name: 'news-id', params: { id: '123', title: 'I am news' } }"
          >NEW1</nuxt-link
        >
      </li>
      <li><nuxt-link to="/news/jsTina">NEW2</nuxt-link></li>
    </ul>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "app",
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="stylus" scoped></style>
