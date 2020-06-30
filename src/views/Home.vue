<template>
  <div class="home container">
	<Header></Header>
	<Content></Content>
	<Footer></Footer>
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
	width: 100%;
	margin: 0 auto;
	font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
}
.header, .content {
	width: 100%;
}
</style>

