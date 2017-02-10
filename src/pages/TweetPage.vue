<template>
  <f7-page>
    <tweet-card
      :tweet="tweet"
      :show-previous-tweet="hasPreviousTweet"
      :show-next-tweet="hasNextTweet"
      @next-tweet="handleNextTweet"
      @previous-tweet="handlePreviousTweet"
    />
  </f7-page>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import TweetCard from '../components/tweet/TweetCard'

export default {
  name: 'tweet-page',
  components: {
    TweetCard
  },
  computed: {
    ...mapState(['tweet']),
    ...mapGetters(['hasNextTweet', 'hasPreviousTweet'])
  },
  methods: {
    ...mapActions({
      handleNextTweet: 'showNextTweet',
      handlePreviousTweet: 'showPreviousTweet'
    })
  }
}
</script>
