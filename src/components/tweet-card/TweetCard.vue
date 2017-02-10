<template>
  <div class="card">
    <tweet-card-header :tweet="tweet"/>
    <tweet-card-content :tweet="tweet"/>
    <tweet-card-footer
      :tweet="tweet"
      :show-previous-tweet="showPreviousTweet"
      :show-next-tweet="showNextTweet"
      @next="handleNext"
      @previous="handlePrevious"
    />
  </div>
</template>

<script>
import TweetCardHeader from './TweetCardHeader'
import TweetCardContent from './TweetCardContent'
import TweetCardFooter from './TweetCardFooter'

export default {
  name: 'tweet-card',
  props: {
    tweet: {
      type: Object,
      required: true
    },
    showNextTweet: {
      type: Boolean,
      required: true
    },
    showPreviousTweet: {
      type: Boolean,
      required: true
    }
  },
  components: {
    TweetCardHeader,
    TweetCardContent,
    TweetCardFooter
  },
  methods: {
    handleNext () {
      this.$emit('next-tweet')
    },
    handlePrevious () {
      this.$emit('previous-tweet')
    }
  }
}
</script>
