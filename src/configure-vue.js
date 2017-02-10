import Promise from 'bluebird'
import Vue from 'vue'
import Vuex from 'vuex'
import 'framework7'
import Framework7Vue from 'framework7-vue'
import 'framework7/dist/css/framework7.material.min.css'
import 'framework7/dist/css/framework7.material.colors.min.css'

window.Promise = Promise
Vue.use(Vuex)
Vue.use(Framework7Vue)
