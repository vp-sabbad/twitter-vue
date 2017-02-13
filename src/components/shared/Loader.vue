<script>
export default {
  name: 'loader',
  functional: true,
  render (h) {
    return (
      <span class={{'preloader': true, 'preloader-red': true}}></span>
    )
  }

}
</script>
<style>
</style>
