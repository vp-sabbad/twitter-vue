<template>
  <div>
    <f7-block-title>
      <span v-show="loading">Loading tweets for "{{query}}"</span>
      <span v-show="!loading && query">Tweets for {{query}}</span>
      <span v-show="!loading &&!query">Please enter a search term</span>
    </f7-block-title>
    <div v-show="loading" class="row no-gutter">
     <div class="col-auto"></div>
     <div v-show="loading" class="content-block row">
       <loader/>
     </div>
    <div class="col-auto"></div>
    </div>
  </div>
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
