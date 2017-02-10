// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './configure-vue.js'
import Routes from './routes'

import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  framework7: {
    root: '#app',
    material: true,
    routes: Routes
  },
  components: {
    App
  }
})
