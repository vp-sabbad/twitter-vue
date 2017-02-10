<template>
  <f7-searchbar
    cancel-link="Cancel"
    placeholder="Search ..."
    :clear="true"
    @change="handleChange"
  />
</template>

<script>
export default {
  name: 'search-bar',
  props: {
    theme: {
      type: String,
      required: false
    }
  },
  methods: {
    handleChange (evt) {
      this.$emit('search', evt.target.value)
    }
  }
}
</script>
