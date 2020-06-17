<template>
  <div class="about container">
	<el-container>
		<el-header class="header">
			<Header></Header>
		</el-header>
		<el-main>
			<Detail></Detail>
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
	min-width: 1280px;
	max-width: 1440px;
	margin: 0 auto;
	font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}
.el-container {
	position: relative;
	height: 100%;
}
.header {
	box-sizing: content-box;
	line-height: 33px;
	height: 33px !important;
	margin-top: 35px;
}
</style>

