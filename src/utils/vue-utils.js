import {reduce} from 'lodash'

export function mapEmitters (specs) {
  return reduce(specs, (acc, type, fn) => Object.assign(acc, {
    [fn]: function (evt) {
      this.$emit(type, evt.target.value)
    }
  }), {})
}
