<template lang="pug">
  div.card-content
    div.card-content-inner {{tweet.text}})
    img(
      width="100%",
      v:if="tweet.entities.media",
      :src="tweet.entities.media && tweet.entities.media[0].media_url"
    )
</template>

<script>
export default {
  name: 'tweet-card-content',
  props: {
    tweet: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
.card-content
  img
    display: block
  .card-content-inner
    padding: 15px 15px
</style>
