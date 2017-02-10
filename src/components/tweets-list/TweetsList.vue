<template>
  <f7-list media-list class="tweets">
    <f7-list-item
      v-for="tweet of tweets"
      :title="tweet.user.name"
      :subtitle="tweet.user | screenName"
      :text="tweet.text"
      :link="tweet | tweetLink"
      @click="handleClick(tweet)"
    >
      <img slot="media" :src="tweet.user.profile_image_url">
    </f7-list-item>
  </f7-list>
</template>

<script>
import TweetsListItem from './TweetsListItem'

export default {
  name: 'tweets-list',
  props: {
    tweets: {
      type: Array,
      required: true
    }
  },
  components: {
    TweetsListItem
  },
  methods: {
    handleClick (tweet) {
      this.$emit('tweet-click', tweet)
    }
  },
  filters: {
    screenName: user => `@${user.screen_name}`,
    profileImage: user => `<img src="${user.profile_image_url}">`,
    tweetLink: tweet => `/tweets/${tweet.id}`
  }
}
</script>

<style lang="sass" scoped>
.tweets
  .item-media
    img
      border-radius: 100%
</style>
