<template>
  <div class="card-footer no-border">
    <a href="#" class="link">Like</a>
    <a href="#" class="link">Comment</a>
    <a href="#" class="link">Share</a>
    <a v-show="showPreviousTweet" href="#" class="link" @click="handlePrevious">Prev</a>
    <a v-show="showNextTweet" href="#" class="link" @click="handleNext">Next</a>
  </div>
</template>

<script>
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
    handleNext () {
      this.$emit('next')
    },
    handlePrevious () {
      this.$emit('previous')
    }
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
