<template>
  <div class="content">
    <div class="breadcrumb">
      <router-link to="/">
        <svg
          class="svg"
          viewBox="0 0 42 22"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <!-- Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch -->
          <desc>Created with Sketch.</desc>
          <defs />
          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="作品展示" transform="translate(-198.000000, -123.000000)" stroke="#28292b">
              <g id="路径" transform="translate(200.000000, 123.000000)">
                <g id="Group">
                  <rect id="Rectangle-2" x="0.5" y="10.5" width="39" height="1" />
                  <polyline
                    id="Path-2"
                    stroke-width="2"
                    points="10.0107681 0.99352564 0.0788190727 10.9977308 10.0107681 21.0235022"
                  />
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
    <div class="image-lazy">
      <el-image
        v-for="(item, index) in 5"
        :key="index"
        class="images"
        :fit="'contain'"
        :src="`${image.src}-${item}.png`"
        :lazy="true"
      >
        <div slot="placeholder" class="image-slot">
          加载中
          <span class="dot">...</span>
        </div>
      </el-image>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import objectFitImages from 'object-fit-images';
@Component({
  props: {
    msg: {
      type: String,
      default() {
        return undefined;
      }
    }
  },
  components: {},
})
export default class Detail extends Vue {
  private image: any = {
    height: 0,
    width: 0,
    src: '',
  };
  private title: any = '';
  private describe: any = '';
  private beforeMount() {
    if (!this.$store.state.imageData) {
      this.$router.push({
        path: '/',
      });
      return
    }
    const { title, describe, order } = this.$store.state.imageData;
    this.title = title;
    this.describe = describe;
    this.image.src = `http://img.owedesign.com/${order}`;
    this.image.width = document.getElementsByClassName('layout')[0].clientWidth
    this.image.height = this.image.width * 1850 / 1440
    
  }
  mounted () {
    objectFitImages('.images img')
    console.log(document.querySelectorAll('.images img'))
  }
}
</script>
<style lang="less" scoped>
@import "./../../styles/index.less";
.content {
  text-align: left;
  padding: 100px 0 60px;
}
.breadcrumb {
  margin: 0;
  padding: 0;
  margin-bottom: 48px;
  .svg {
    width: 42px;
    height: 22px;
  }
  a {
    vertical-align: bottom;
    height: 22px;
    display: inline-block;
    width: 42px;
    margin-right: 10px;
    cursor: pointer;
    &:hover {
      opacity: 0.6;
    }
  }
  span {
    font-size: 20px;
    color: @color;
    line-height: 20px;
  }
}
.header {
  h3 {
    height: 67px;
    font-size: 48px;
    color: @color;
    line-height: 67px;
    margin: 0;
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
    line-height: 20px;
    color: @color-text;
    margin: 0;
  }
}
.image-lazy {
  margin-top: 110px;
  width: 100%;
  .images {
    overflow: inherit;
    width: 100%;
    .image-slot {
      text-align: center;
      min-height: 600px;
      font-size: 16px;
      color: #4a4a4a;
    }
  }
}
</style>
