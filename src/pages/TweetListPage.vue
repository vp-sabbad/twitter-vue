<template>
  <f7-page>
    <search-bar @search="handleSearch" />
    <tweets-list-title :loading="loading" :query="query"/>
    <tweets-list v-show="!loading" :tweets="tweets" @tweet-click="handleTweetClick"/>
  </f7-page>
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import SearchBar from '../components/shared/SearchBar'
import TweetsList from '../components/tweets-list/TweetsList'
import TweetsListTitle from '../components/tweets-list/TweetsListTitle'

export default {
  name: 'tweet-list-page',
  components: {
    SearchBar,
    TweetsList,
    TweetsListTitle
  },
  computed: {
    ...mapState(['tweets', 'loading', 'query'])
  },
  methods: {
    ...mapActions({
      handleSearch: 'search'
    }),
    ...mapMutations({
      handleTweetClick: 'setTweet'
    })
  }
}
</script>
