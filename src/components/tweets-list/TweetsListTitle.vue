<template lang="pug">
  div
    f7-block-title
      span(v-show="loading") Loading tweets for "{{query}}"
      span(v-show="!loading && query") Tweets for "{{query}}"
      span(v-show="!loading && !query") Please enter a search term
    div.row.no-gutter(v-show="loading")
      div.col-auto
      div.content-block.row(v-show="loading")
        loader
      div.col-auto
</template>

<script>
import Loader from '../shared/Loader'

export default {
  name: 'tweets-list-title',
  components: {
    Loader
  },
  props: {
    query: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      required: true
    }
  }
}
</script>
