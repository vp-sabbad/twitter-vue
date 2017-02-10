<template>
  <f7-list-item
    :title="tweet.user.name"
    :subtitle="tweet.user | screenName"
    :text="tweet.text"
    :link="tweet | tweetLink"
  >
    <img slot="media" :src="tweet.user.profile_image_url">
  </f7-list-item>
</template>

<script>
export default {
  name: 'tweets-list-item',
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  filters: {
    screenName: (user) => `@${user.screen_name}`,
    tweetLink: tweet => `/tweets/${tweet.id}`
  }
}
</script>
