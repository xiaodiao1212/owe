<template>
  <div class="about container">
	<Header></Header>
	<Detail></Detail>
	<Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/components/Header/Header.vue';
import Detail from '@/components/Detail/Detail.vue';
import Footer from '@/components/Footer/Footer.vue';

@Component({
	components: {
		Header,
		Detail,
		Footer,
	},
})
export default class About extends Vue {}
</script>

<style scoped lang="less">
.container {
	width: 100%;
	margin: 0 auto;
	font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}
.header, .about {
	width: 100%;
	margin: 0 auto;
}
</style>

