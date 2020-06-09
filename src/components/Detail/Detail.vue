<template>
    <div class="content">
        <div class="breadcrumb">
            <router-link to="/home">
                <svg width="42px" height="22px" viewBox="0 0 42 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
                    <desc>Created with Sketch.</desc>
                    <defs></defs>
                    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="作品展示" transform="translate(-198.000000, -123.000000)" stroke="#000000">
                            <g id="路径" transform="translate(200.000000, 123.000000)">
                                <g id="Group">
                                    <rect id="Rectangle-2" x="0.5" y="10.5" width="39" height="1"></rect>
                                    <polyline id="Path-2" stroke-width="2" points="10.0107681 0.99352564 0.0788190727 10.9977308 10.0107681 21.0235022"></polyline>
                                </g>
                            </g>
                        </g>
                    </g>
                </svg>
            </router-link>
            <span>Home</span>
        </div>
        <div class="header">
            <h3>{{title}}</h3>
            <p>{{describe || ' '}}</p>
        </div>
        <el-image class="images" :fit="'contain'" :src="image"></el-image>
    </div>

</template>
<script lang="ts">
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

export default class Detail extends Vue {
  private image: any = null;
  private title: any = '';
  private describe: any = '';
  private beforeMount() {
    const { title, describe, order } = this.$route.query;
    this.title = title;
    this.describe = describe;
    this.image = require(`assets/about/${order}.jpg`);
  }
}

</script>
<style lang="less" scoped>
.content {
    text-align: left;
    padding-top: 100px;
    p:first-child {
        color: #4A4A4A;
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 20px;
    }
    .detail {
        font-size: 20px;
        color: #000000;
        line-height: 20px;
    }
}
.breadcrumb {
    margin: 0;
    padding: 0;
    margin-bottom: 48px;
    a {
        vertical-align: bottom;
        height: 22px;
        display: inline-block;
        width: 42px;
        margin-right: 10px;
        cursor: pointer;
    }
    span {
        font-size: 16px;
        color: #000;
        line-height: 16px;
    }
}
.header {
    h3 {
        height: 67px;
        font-size: 48px;
        color: #4A4A4A;
        line-height: 67px;
        margin: 0;
        margin-bottom: 20px;
    }
    p {
        font-size: 20px;
        line-height: 20px;
        color: #000000;
        margin: 0;
    }
}
.images {
    margin-top: 110px;
    width: 100%;
}
</style>
