<template>
  <div class="header">
    <!-- <div class="logo">
            <svg class="svg" viewBox="0 0 86 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                Generator: Sketch 51.2 (57519) - http://www.bohemiancoding.com/sketch
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="首页" transform="translate(-200.000000, -40.000000)" fill="#29292B">
                        <g id="导航" transform="translate(200.000000, 35.000000)">
                            <g id="LOGO">
                                <path d="M64,18 L86,18 L86,16 L64,16 L64,18 Z M64,28 L86,28 L86,26 L64,26 L64,28 Z M12,27 C6.47630193,27 2,22.5234919 2,17 C2,11.4779582 6.47630193,7 12,7 C17.5222352,7 22,11.4779582 22,17 C22,22.5234919 17.5222352,27 12,27 Z M12,5 C5.37278539,5 0,10.3724638 0,17 C0,23.6275362 5.37278539,29 12,29 C18.6272146,29 24,23.6275362 24,17 C24,10.3724638 18.6272146,5 12,5 Z M54,22 L44,12 L34,22 L34,5 L32,5 L32,29 L34,29 L34,25 L44,15 L54,25 L54,29 L56,29 L56,5 L54,5 L54,22 Z M64,8 L86,8 L86,6 L64,6 L64,8 Z" id="Page-1"></path>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
        
        <div class="logo-detail">
            <p class="header">
                UI & UX
            </p>
            <p class="footer">
                Design Studio
            </p>
    </div>-->
    <div class="logo">
      <router-link to="/home">
        <el-image
          :fit="'contain'"
          :src="logo"
          :lazy="true"
        >
          <div slot="placeholder" class="image-slot">
            加载中
            <span class="dot">...</span>
          </div>
        </el-image>
      </router-link>
    </div>
    <div class="contact">
      <div @mouseover="showQr = true" @mouseout="showQr = false" class="contact-container">
        <template v-if="!showQr">
          <p>Contact Us</p>
        </template>
        <template v-if="showQr">
          <div class="qrcode">
            <p>微信扫码，我们一起探讨设计</p>
            <el-image style="width: 100px; height: 100px" :src="young" :fit="'contain'"></el-image>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private logo = require('@/assets/logo.png');
  private young = require("assets/young.png");
  private showQr = false;
  // private young = image;
  // @Prop() private msg!: string;
}
</script>
<style lang="less" scoped>
.header {
  box-sizing: content-box;
	line-height: 33px;
  height: 33px !important;
  width: 100%;
  padding-top: 35px;
}
// .logo,
// .logo-detail {
//   float: left;
//   svg {
//     width: 86px;
//     height: 33px;
//   }
// }
// .logo {
//   margin-right: 10px;
//   cursor: pointer;
// }
// .logo-detail {
//   p {
//     margin: 0;
//     font-size: 14px;
//     text-align: left;
//   }
//   p.header {
//     color: #ff8000;
//     height: 20px;
//     line-height: 20px;
//   }
//   p.footer {
//     color: #b0b0b0;
//     font-size: 12px;
//     line-height: 5px;
//     height: 13px;
//   }
// }
.logo {
  float: left;
  cursor: pointer;
  .el-image {
    height: 33px;
  }
}
.contact {
  float: right;
  div.contact-container {
    cursor: pointer;
    position: relative;
    > p {
      font-family: PingFangSC-Light;
      font-size: 16px;
      color: #4a4a4a;
      letter-spacing: 0;
      text-align: right;
      margin: 0;
      cursor: pointer;
      opacity: 0.6;
    }
    .qrcode {
      position: absolute;
      right: 0;
      top: 0;
      width: 200px;
      height: 200px;
      p {
        font-size: 12px;
        color: #4a4a4a;
        width: 100%;
      }
    }
    &:hover {
      > p {
        opacity: 0;
        transition: all 2s linear;
      }
      .qrcode {
        opacity: 1;
        transition: all 2s linear;
      }
    }
  }
}
</style>
