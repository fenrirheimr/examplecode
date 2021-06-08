import TimexStatItem from './TimexStatItem/TimexStatItem.vue'

export default {
  components: {
    TimexStatItem
  },
  computed: {
    featuresItems () {
      return [
        {
          firstLineText: this.i18nSection('aboutpageTimexStatItem1Title'),
          secondLineText: this.i18nSection('aboutpageTimexStatItem1Text')
        },
        {
          firstLineText: this.i18nSection('aboutpageTimexStatItem2Title'),
          secondLineText: this.i18nSection('aboutpageTimexStatItem2Text')
        },
        {
          firstLineText: this.i18nSection('aboutpageTimexStatItem3Title'),
          secondLineText: this.i18nSection('aboutpageTimexStatItem3Text')
        },

        {
          firstLineText: this.i18nSection('mainpageWeAreGrootItem1Title'),
          secondLineText: this.i18nSection('mainpageWeAreGrootItem1Text')
        },
        {
          firstLineText: this.i18nSection('mainpageWeAreGrootItem2Title'),
          secondLineText: this.i18nSection('mainpageWeAreGrootItem2Text')
        },
        {
          firstLineText: this.i18nSection('mainpageWeAreGrootItem3Title'),
          secondLineText: this.i18nSection('mainpageWeAreGrootItem3Text')
        }
      ]
    }
  }
}
