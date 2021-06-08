import VueTypes from 'vue-types'
import * as directives from 'src/directives'

export default {
  directives: {
    ...directives
  },
  props: {
    options: VueTypes.any, // { symbol, title }
    value: Object,
    theme: VueTypes.oneOf(['dark', 'light']).def('light')
  },
  data () {
    return {
      optionsEnabled: false
    }
  },
  computed: {
    title () {
      return this.value && this.value.title
    }
  },
  methods: {
    closeOptions () {
      this.optionsEnabled = false
    },
    changeSelected (value) {
      this.optionsEnabled = false
      this.$emit('change', value.symbol)
    },
    openOptions () {
      this.optionsEnabled = !this.optionsEnabled
    }
  }
}
