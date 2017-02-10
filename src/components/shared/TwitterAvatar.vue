<template>
  <div class="twitter-avatar">
    <img :src="src" width="34" height="34">
  </div>
</template>

<script>
export default {
  name: 'twitter-avatar',
  props: {
    src: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.twitter-avatar
  float: left
  img
    border-radius: 100%
</style>
