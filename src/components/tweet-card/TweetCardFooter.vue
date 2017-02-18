<template lang="pug">
  div.card-footer.no-border
    a.link(href="#") Like
    a.link(href="#") Comment
    a.link(href="#") Share
    a.link(
      href="#",
      v:show="showPreviousTweet",
      @click="handlePrevious"
    ) Previous
    a.link(
      href="#",
      v:show="showNextTweet",
      @click="handleNext"
    ) Next
</template>

<script>
import {mapEmitters} from '../../utils/vue-utils'

export default {
  name: 'tweet-card-footer',
  props: {
    tweet: {
      type: Object,
      required: true
    },
    showPreviousTweet: {
      type: Boolean,
      required: true
    },
    showNextTweet: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    ...mapEmitters({
      handlePrevious: 'previous',
      handleNext: 'next'
    })
  }
}
</script>

<style lang="sass" scoped>
.card-footer
  background: #fafafa
  a
    color: #81848b
    font-weight: 500
</style>
