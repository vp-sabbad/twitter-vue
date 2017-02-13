<template lang="pug">
  f7-searchbar(
    cancel-link="Cancel"
    placeholder="Search ..."
    ":clear"="true"
    "@change"="handleChange"
  )
</template>

<script>
import {mapEmitters} from '../../utils/vue-utils'

export default {
  name: 'search-bar',
  props: {
    theme: {
      type: String,
      required: false
    }
  },
  methods: {
    ...mapEmitters({
      'handleChange': 'search'
    })
  }
}
</script>
