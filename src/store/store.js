import _ from 'lodash'
import vuex from 'vuex'
import twitterApi from '../api/twitter-api'

export default new vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  state: {
    tweetIndex: -1,
    theme: '',
    tweets: [],
    tweet: null,
    query: '',
    loading: false
  },
  getters: {
    hasNextTweet: state => state.tweetIndex < state.tweets.length - 1,
    hasPreviousTweet: state => state.tweetIndex > 0
  },
  mutations: {
    selectPreviousTweet (state) {
      if (state.tweetIndex > 0) {
        state.tweetIndex--
        state.tweet = state.tweets[state.tweetIndex]
      }
    },
    selectNextTweet (state) {
      if (state.tweetIndex < state.tweets.length - 1) {
        state.tweetIndex++
        state.tweet = state.tweets[state.tweetIndex]
      }
    },
    setTweet (state, tweet) {
      Object.assign(state, {
        tweet,
        tweetIndex: _.findIndex(state.tweets, {id: tweet.id})
      })
    },
    setTweets (state, tweets) {
      state.tweets = tweets
    },
    setQuery (state, query) {
      state.query = query
    },
    setLoading (state, loading) {
      state.loading = loading
    },
    setError (state, error) {
      state.error = error
    }
  },
  actions: {
    showPreviousTweet ({commit}) {
      commit('selectPreviousTweet')
    },
    showNextTweet ({commit}) {
      commit('selectNextTweet')
    },
    search ({commit}, query) {
      commit('setQuery', query)
      if (query === '') return commit('setTweets', [])
      commit('setLoading', true)
      return twitterApi.search(query)
        .then(tweets => commit('setTweets', tweets))
        .catch(err => {
          commit('setTweets', [])
          commit('setError', err)
          console.error(err)
        })
        .finally(() => commit('setLoading', false))
    }
  }

})
