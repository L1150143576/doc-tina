<template>
  <div>
    <h2>这个是Home页</h2>
    <ul>
      <li><nuxt-link :to="{ name: 'index' }">home</nuxt-link></li>
      <li><nuxt-link :to="{ name: 'about' }">about</nuxt-link></li>
      <li>
        <nuxt-link :to="{ name: 'news', params: { newID: '10036' } }"
          >NEW</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>
