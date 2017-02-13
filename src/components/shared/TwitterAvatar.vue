<script>
export default {
  name: 'twitter-avatar',
  functional: true,
  props: {
    src: {
      type: String,
      required: true
    }
  },
  render (h, {props}) {
    const {src} = props
    return (
      <div class={{'twitter-avatar': true}}>
        <img src={src} width="34" height="34"/>
      </div>
    )
  }
}
</script>

<style lang="sass">
.twitter-avatar
  float: left
  img
    border-radius: 100%
</style>
