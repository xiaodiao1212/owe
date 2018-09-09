<template>
  <div class="home">
	<el-container class="container">
		<el-header class="header">
			<Header></Header>
		</el-header>
		<el-main>
			<Detail></Detail>
		</el-main>
		<el-footer>
			<Footer class="footer"></Footer>
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
export default class Home extends Vue {}
</script>

<style scoped lang="less">
.container {
	min-width: 1520px;
}
.header {
	box-sizing: content-box;
	line-height: 33px;
	height: 33px !important;
}
.footer {
	margin-top: 100px;
}
</style>

