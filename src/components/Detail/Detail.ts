import { Component, Vue } from 'vue-property-decorator';
@Component({
  props: {
    msg: {
      type: String,
      default() {
        return undefined;
      },
    },
  },
  components: {},
})

export default class Detail extends Vue {}
