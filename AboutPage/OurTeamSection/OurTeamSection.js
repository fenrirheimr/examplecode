import { mapState } from 'vuex'
import ScrollItemsPartial from '@/pages/lib/partials/ScrollItemsPartial/ScrollItemsPartial.vue'
import OurTeamItem from './OurTeamItem/OurTeamItem.vue'

export default {
  components: {
    OurTeamItem,
    ScrollItemsPartial
  },
  computed: {
    ...mapState({
      members: state => state.public.members
    }),
    content () {
      return {
        title: this.i18nSection('aboutpageOurTeamTitle'),
        description: this.i18nSection('aboutpageOurTeamDescription')
      }
    },
    membersItems () {
      return this.members.map(e => ({
        icon: e.icon,
        name: e.name,
        position: e.position,
        socialLinks: e.socialLinks.map(e => ({
          url: e.link,
          text: e.type.toLowerCase()
        }))
      }))
    }
  },
  methods: {
    scrollItems () {
      const slider = document.querySelector('.slider')
      let isDown = false
      let startX
      let scrollLeft

      slider.addEventListener('mousedown', (e) => {
        isDown = true
        slider.classList.add('active')
        startX = e.pageX - slider.offsetLeft
        scrollLeft = slider.scrollLeft
      })
      slider.addEventListener('mouseleave', () => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mouseup', () => {
        isDown = false
        slider.classList.remove('active')
      })
      slider.addEventListener('mousemove', (e) => {
        if (!isDown) {
          return
        }
        e.preventDefault()
        const x = e.pageX - slider.offsetLeft
        const walk = (x - startX) * 3 // scroll-fast
        slider.scrollLeft = scrollLeft - walk
      })
    }
  }
}
