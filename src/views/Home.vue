<template>
  <div class="home">
	<el-container class="container">
		<el-header class="header">
			<Header></Header>
		</el-header>
		<el-main>
			<Content></Content>
		</el-main>
		<el-footer>
			<Footer></Footer>
		</el-footer>
	</el-container>
    <!-- wosjozhjaooi
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Header from '@/components/Header/Header.vue';
import Content from '@/components/Content/Content.vue';
import Footer from '@/components/Footer/Footer.vue';

@Component({
	components: {
		Header,
		Content,
		Footer,
	},
})
export default class Home extends Vue {}
</script>

<style scoped lang="less">
.container {
	min-width: 1280px;
	max-width: 1440px;
	margin: 0 auto;
	font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}
.header {
	box-sizing: content-box;
	line-height: 33px;
	height: 33px !important;
}
.footer {
	position: absolute;
	bottom: 60px;
	left: 50%;
	-webkit-transform: translate(-50%, 0);
	transform: translate(-50%, 0);
}
</style>

