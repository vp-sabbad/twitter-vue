<template lang="pug">
  div.card-header
    twitter-avatar(":src"="tweet.user.profile_image_url")
    div.twitter-name {{tweet.user.name}}
    div.twitter-date {{tweet.created_at | from}}
</template>

<script>
import moment from 'moment'
import TwitterAvatar from '../shared/TwitterAvatar'

export default {
  name: 'tweet-card-header',
  props: {
    tweet: {
      type: Object,
      required: true
    }
  },
  components: {
    TwitterAvatar
  },
  filters: {
    from: date => moment(date).from(moment())
  }
}
</script>

<style lang="sass" scoped>
.card-header
  display: block
  padding: 10px
  .twitter-name
    margin-left: 44px
    font-size: 14px
    font-weight: 500
  .twitter-date
    margin-left: 44px
    font-size: 13px
    color: #8e8e93
</style>
