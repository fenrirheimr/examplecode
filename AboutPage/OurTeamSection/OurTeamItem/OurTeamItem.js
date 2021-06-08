import { CachedImageModel } from 'src/models'

export default {
  props: {
    item: Object // url, name, position, socialLinks url, socialLinks type
  },
  methods: {
    getImageUrl (image) {
      const imageModel = CachedImageModel.fromServerModel(image, {
        baseUrl: this.config.publicService.imageUrl
      })
      return imageModel.url
    }
  }
}
