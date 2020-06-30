<template>
  <div class="content">
    <div class="title">
      <span class="before-text">We can do </span>
      <!-- <div v-for="(item, index) in loopTextArry" :key="index"  class="loop-container"> -->
        <transition
        v-for="(item, index) in loopTextArry" :key="index"
        name="loop">
          <span v-if="index == loopTextIndex" class="loop-text">{{item}}.</span>
        </transition>
      <!-- </div> -->
    </div>
    <p class="detail">用心做好每一个设计细节。</p>
    <!-- <div class="img-list">
      <el-image v-for="url in urls" :key="url" :src="`${url}`" lazy></el-image>
    </div> -->
    <div class="carousel-container">
      <el-carousel ref="carousel" :interval="5000" arrow="never" :initial-index="index" indicator-position="none" :autoplay="false">
        <el-carousel-item v-for="(item, index) in carousel" :key="index">
          <!-- <div class="img-list"> -->
            <div class="image-container" v-for="image in item" :key="image.name">
              <el-image @click="goToInfo(image)" fit="contain" :src="image.url">
                <div slot="placeholder" class="image-slot">
                  加载中<span class="dot">...</span>
                </div>
              </el-image>
              <p>{{image.title}}</p>
            </div>
          <!-- </div> -->
        </el-carousel-item>
      </el-carousel>
      <div class="carousel-arrow carousel-left-arrow" @click="carouselSet('prev')">
        <el-image fit="contain" class="normal" :src="leftNormal"></el-image>
        <el-image fit="contain" class="hover" :src="leftHover"></el-image>
      </div>
      <div class="carousel-arrow carousel-right-arrow" @click="carouselSet('next')">
        <el-image fit="contain" class="normal" :src="rightNormal"></el-image>
        <el-image fit="contain" class="hover" :src="rightHover"></el-image>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import leftNormal from '@/assets/left_normal.png';
// import * as r from './../../static/picture.json';
@Component({
	props: {},
	components: {},
})
export default class Content extends Vue {
  public $refs!: {
    carousel: HTMLElement,
    cellList: any,
  };

  private leftNormal = require('@/assets/arrow_left_normal.png');
  private rightNormal = require('@/assets/arrow_right_normal.png');
  private leftHover = require('@/assets/arrow_left_hover.png');
  private rightHover = require('@/assets/arrow_right_hover.png');
  private index = -1;
  private canShow = false;
  private carousel = [
    [
      {
        title: 'zflamp',
        describe: 'ZHONGFA_官网视觉设计，用数字营销助力中国企业走出国门',
        order: '01zflamp',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/01zflamp-thumbnail.png',
      },
      {
        title: '黑桃圈',
        describe: '黑桃圈_APP视觉设计，德州扑克俱乐部、游戏端，炫黑风格助你梭哈',
        order: '02黑桃圈',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/02黑桃圈-thumbnail.png',
      },
      {
        title: 'StarryU',
        describe: 'StarryU_网站视觉设计，面向全球中国留学生的一站式职业规划平台',
        order: '03StarryU',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/03StarryU-thumbnail.png',
      },
      {
        title: '酷飞驾驶',
        describe: '酷飞驾驶_APP视觉设计，AI语音交互导航，智能周边服务查询',
        order: '04酷飞驾驶',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/04酷飞驾驶-thumbnail.png',
      },
      {
        title: '熊二抓娃娃',
        describe: '熊二抓娃娃_APP视觉设计，整体采用黑黄对比色为主色调，活泼、灵动，让抓娃娃更有趣',
        order: '05熊二抓娃娃',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/05熊二抓娃娃-thumbnail.png',
      },
      {
        title: 'YS',
        describe: '优设_官网视觉设计，用数字营销驱动出口增长',
        order: '06YS',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/06YS-thumbnail.png',
      },
      {
        title: '错题plus',
        describe: '错题plus_APP视觉设计，解析错题、记录笔记，一课、一练，让学习更简单',
        order: '07错题plus',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/07错题plus-thumbnail.png',
      },
      {
        title: '优形',
        describe: '优形_H5视觉设计，健康管理和饮食托管平台',
        order: '08优形',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/08优形-thumbnail.png',
      },
    ],
    [
      {
        title: 'Musiers',
        describe: 'Musiers_官网视觉设计，美国原创音乐人聚集平台',
        order: '09Musiers',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/09Musiers-thumbnail.png',
      },
      {
        title: '6Road',
        describe: '6Road_APP视觉设计，整体风格采用极简风，大面积留白增强可读性，以橙色为主色调，橙白搭配干净清爽，活力十足',
        order: '10-6Road',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/10-6Road-thumbnail.png',
      },
      {
        title: '美瑞健康',
        describe: '美瑞健康集团_官网视觉设计，一家香港上市的跨国医疗健康产业集团',
        order: '11美瑞健康',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/11美瑞健康-thumbnail.png',
      },
      {
        title: '悬赏猫',
        describe: '悬赏猫_APP视觉设计，一款专注手机赚钱的APP',
        order: '12悬赏猫',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/12悬赏猫-thumbnail.png',
      },
      {
        title: 'keepwell',
        describe: 'keepwell_APP视觉设计，一款健康生活APP，致力于用分享传递快乐、健康，拉近人们的距离',
        order: '13keepwell',
        url: 'http://qbnqxuuz9.bkt.clouddn.com/13keepwell-thumbnail.png',
      },
    ],
  ];
  private show = true;
  private loopTextArry = [
    'User Interface Design',
    'Website Design',
    'Icon Design',
    'Animation Design',
    'Graphic Design',
  ];
  private loopTextIndex = 0;
  private handle: any = null;

  private mounted() {
    this.index = this.$store.state.sliceIndex;
    this.handle = setInterval(() => {
      this.loopTextFun();
    }, 3000);
  }

  private destroyed() {
    clearInterval(this.handle);
  }

  private loopTextFun() {
    this.loopTextIndex = this.loopTextIndex === 4 ? 0 : this.loopTextIndex + 1;
  }
  private goToInfo(image: any) {
    delete image.url;
    this.$router.push({
      path: '/about',
      query: image,
    });
  }

  private carouselSet(func: string) {
    (this.$refs.carousel as any)[func]();
    this.$store.dispatch('SETINDEX', (this.$refs.carousel as any).activeIndex);
  }

}
</script>

<style lang="less">
@import "./../../styles/index.less";
.content {
    text-align: left;
    padding-top: 100px;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    padding-bottom: 30px;
    .title {
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 20px;
        .before-text {
          font-weight: normal;
          color: @color-text;
        }
        .loop-container {
          position: relative;
          width: 80%;
          display: inline-block;
          height: 40px;
          // vertical-align: middle;
        }
        .loop-text {
            font-family: Georgia;
            text-decoration: underline;
            opacity: 1;
            color: @color;
        }
        // .loop-enter-active, .loop-leave-active{
        //   transition: all 4s ease;
        //   opacity: 0;
        // }
        // .loop-enter, .loop-leave-to {           
        //   opacity: 1;
        // }
        .loop-enter {
           transition: all 1s ease;
           opacity: 0;
        }
        .loop-enter-active {
          opacity: 0;
          transition: all 1s ease;
        }
        .loop-enter-to {
          opacity: 1;
          // transition: all 1s ease;
        }
        .loop-leave {
          opacity: 0;
          // transition: all 1s ease;
        }
        .loop-leave-active  {
          opacity: 0;
          // transition: all 0.5s ease;
        }
        .loop-leave-to {
          opacity: 0;
          // transition: all 0.5s ease;
        }
    }
    .detail {
        font-size: 20px;
        color: #28292b;
        opacity: 0.8;
        line-height: 20px;
        margin-bottom: 100px;
    }
    .carousel-container {
      position: relative;
      .carousel-arrow {
        position: absolute;
        top: 50%;
        z-index: 100;
        width: 12px;
        cursor: pointer;
        .el-image {
          width: 100%;
          position: absolute;
          -webkit-transform: translate(0, -80%);
          transform: translate(0, -80%);
        }
        &:hover {
          .el-image {
            transition: opacity .3s;
          }
          .normal {
            opacity: 0;
          }
          .hover {
            opacity: 1;
          }
        }
        .hover {
          opacity: 0;
        }
      }
      .carousel-left-arrow {
        left: 0;
      }
      .carousel-right-arrow {
        right: 0;
      }
    }
    .el-carousel {
      // margin-top: 40px;
      .el-carousel__container {
        height: 570px;
      }
      .el-carousel__item {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .image-container {
          transition:All 0.6s cubic-bezier(0.45, 0.25, 0.60, 0.95);
          -webkit-transition:All 0.6s cubic-bezier(0.45, 0.25, 0.60, 0.95);
          -moz-transition:All 0.6s cubic-bezier(0.45, 0.25, 0.60, 0.95);
          -o-transition:All 0.6s cubic-bezier(0.45, 0.25, 0.60, 0.95);
          padding: 10px 10px 0 10px;
          cursor: pointer;
          text-align: center;
          p {
             visibility: hidden;
             margin: 0;
             padding: 0;
             color: #fff;
             font-size: 14px;
             height: 24px;
             text-align: left;
             line-height: 22px;
          }
          .el-image {
            width: 316px;
            height: auto;
            cursor: pointer;
            padding: 0;
            // padding-bottom: 30px;
            .image-slot {
              font-size: 14px;
              text-align: center;
            }
          }
          &:hover {
            // transform-origin:50% 50%;
            // transform:scale(1.05, 1.1);
            // -webkit-transform:scale(1.05, 1.1);
            // -moz-transform:scale(1.05, 1.1);
            // -o-transform:scale(1.05, 1.1);
            // -ms-transform:scale(1.05, 1.1);
            background-color: black;
            p {
              visibility: visible;
            }
          }
        }
        
      }
      // 下面是grid布局，很多浏览器不兼容，唉～
      // .el-carousel__item {
      //   display: grid;
      //   box-sizing: border-box;
      //   // justify-content: space-between;
      //   // grid-template-columns: repeat(4, 1fr);
      //   grid-template-columns: 25% 25% 25% 25%;
      //   grid-auto-rows: auto;
      //   grid-gap: 0 0;
      //   justify-items: center;
      //   align-items: center;
      //   // display: flex;
      //   // flex-wrap: wrap;
      //   // justify-content: space-between;
      //   .image-container {
      //     transition:All 0.6s cubic-bezier(0.45, 0.25, 0.60, 0.95);
      //     -webkit-transition:All 0.6s cubic-bezier(0.45, 0.25, 0.60, 0.95);
      //     -moz-transition:All 0.6s cubic-bezier(0.45, 0.25, 0.60, 0.95);
      //     -o-transition:All 0.6s cubic-bezier(0.45, 0.25, 0.60, 0.95);
      //     padding: 10px 10px 0 10px;
      //     cursor: pointer;
      //     text-align: center;
      //     p {
      //        visibility: hidden;
      //        margin: 0;
      //        padding: 0;
      //        color: #fff;
      //        font-size: 14px;
      //        height: 24px;
      //        text-align: left;
      //        line-height: 22px;
      //     }
      //     .el-image {
      //       min-width: 296px;
      //       max-width: 326px;
      //       height: auto;
      //       cursor: pointer;
      //       padding: 0;
      //       // padding-bottom: 30px;
      //       .image-slot {
      //         font-size: 14px;
      //         text-align: center;
      //       }
      //     }
      //     &:hover {
      //       // transform-origin:50% 50%;
      //       // transform:scale(1.05, 1.1);
      //       // -webkit-transform:scale(1.05, 1.1);
      //       // -moz-transform:scale(1.05, 1.1);
      //       // -o-transform:scale(1.05, 1.1);
      //       // -ms-transform:scale(1.05, 1.1);
      //       background-color: black;
      //       p {
      //         visibility: visible;
      //       }
      //     }
      //   }
        
      // }
    }
    // .img-list {
    //     display: grid;
    //     box-sizing: border-box;
    //     // justify-content: space-between;
    //     grid-template-columns: repeat(4, 1fr);
    //     grid-gap: 40px 20px;
    //     justify-items: center;
    //     align-items: center;
    //     .el-image {
    //         width: 510px;
    //         height: auto;
    //     }
    // }
}

</style>