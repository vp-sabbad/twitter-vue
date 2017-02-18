<template lang="pug">
  f7-page
    tweet-card(
      :tweet="tweet",
      :show-previous-tweet="hasPreviousTweet",
      :show-next-tweet="hasNextTweet",
      @next-tweet="handleNextTweet",
      @previous-tweet="handlePreviousTweet"
    )
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import TweetCard from '../components/tweet-card/TweetCard'

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
