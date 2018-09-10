// import 'swiper/dist/css/swiper.css';
// import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { Component, Vue } from 'vue-property-decorator';
import * as r from './../../static/picture.json';
@Component({
	props: {},
	components: {
		// swiper,
		// swiperSlide,
	},
})

export default class Content extends Vue {
	public rows = r.default.data;
	public canShow = false;
}
