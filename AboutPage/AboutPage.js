import { mapGetters, mapState } from 'vuex'
import NavBar from '@/pages/lib/sections/NavBar/NavBar.vue'
import PublicFooter from '@/pages/lib/sections/PublicFooter/PublicFooter.vue'
import PartnersSection from '@/pages/lib/sections/PartnersSection/PartnersSection.vue'
import ContactsSection from '@/pages/lib/sections/ContactsSection/ContactsSection.vue'

import PromoSection from './PromoSection/PromoSection.vue'
import CryptoPunkSection from './CryptoPunkSection/CryptoPunkSection.vue'
import TimexStatSection from './TimexStatSection/TimexStatSection.vue'
import OurTeamSection from './OurTeamSection/OurTeamSection.vue'
import TxButton from '@/pages/lib/components/TxButton/TxButton.vue'

export default {
  components: {
    NavBar,
    PromoSection,
    CryptoPunkSection,
    TimexStatSection,
    PartnersSection,
    OurTeamSection,
    ContactsSection,
    PublicFooter,
    TxButton
  },
  computed: {
    ...mapGetters({
      config: 'config/config'
    }),
    ...mapState({
      partners: state => state.public.partners
    })
  },
  methods: {
    handleTechnology () {
      this.$router.push({
        path: this.createLocalizedLink('/our-technology')
      })
    },
    createLocalizedLink (url) {
      if (url.startsWith('/private')) {
        return url
      }
      return this.getLanguageUrlPathPrefix() + url
    }
  }
}
