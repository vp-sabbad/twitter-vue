<template>
  <f7-views navbar-fixed>
    <f7-view main>
      <f7-navbar
        title="TwitterVue"
        :back-link="true"
        :theme="theme"
        sliding>
      </f7-navbar>
      <f7-pages>
        <tweet-list-page></tweet-list-page>
      </f7-page>
    </f7-view>
  </f7-views>
</template>

<script>
import {mapState} from 'vuex'
import TweetListPage from './pages/TweetListPage'
import store from './store/store'

export default {
  name: 'app',
  components: {
    TweetListPage
  },
  store,
  computed: {
    ...mapState(['theme'])
  }
}
</script>
