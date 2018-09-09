// import 'swiper/dist/css/swiper.css';
// import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { Component, Vue } from 'vue-property-decorator';
import * as r from './../../static/public.json';

@Component({
	props: {},
	components: {
		// swiper,
		// swiperSlide,
	},
})

export default class Content extends Vue {
	public rows = [
		[{
			pic: 'a-1',
			detail: '赵斌天才',
		},
		{
			pic: 'a-2',
			detail: '左边说的对',
		},
		{
			pic: 'a-3',
			detail: '同意的顶',
		},
		{
			pic: 'a-4',
			detail: '同意',
		}],
		[{
			pic: 'a-5',
			detail: 'owe牛逼',
		},
		{
			pic: 'a-6',
			detail: '阳阳牛逼',
		},
		{
			pic: 'a-7',
			detail: '老板牛逼',
		},
		{
			pic: 'a-8',
			detail: '潘勇傻逼',
		}],
	];
	public canShow = false;
}
