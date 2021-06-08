import WithBackgroundImagePartial from '@/pages/lib/partials/WithBackgroundImagePartial/WithBackgroundImagePartial.vue'

export default {
  components: {
    WithBackgroundImagePartial
  },
  computed: {
    items () {
      return [
        {
          itemTitle: this.i18nSection('aboutpageCryptoPunkItemTitle'),
          itemText: this.i18nSection('aboutpageCryptoPunkItemText')
        }
      ]
    }
  }
}
