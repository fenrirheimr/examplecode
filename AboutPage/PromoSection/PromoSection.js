import { mapState } from 'vuex'
import TwoColumnHeaderPartial from '@/pages/lib/partials/TwoColumnHeaderPartial/TwoColumnHeaderPartial.vue'
import TxButton from '@/pages/lib/components/TxButton/TxButton.vue'

export default {
  components: {
    TwoColumnHeaderPartial,
    TxButton
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      passport: state => state.passport?.user
    }),
    promoContent () {
      return {
        title: this.i18nSection('aboutpagePromoTitle'),
        description: this.i18nSection('aboutpagePromoDescription'),
        subtitle: this.i18nSection('aboutpagePromoSubTitle')
      }
    }
  },
  methods: {
    handleContact (id) {
      const element = document.getElementById(id)
      element.scrollIntoView({ block: 'start', behavior: 'smooth' })
    }
  }
}
