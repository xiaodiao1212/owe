<template>
  <div class="content">
    <p class="title"><span>We can do </span><span>Graphic Artist Design.</span></p>
    <p class="detail">用心做好每一个细节。</p>
    <!-- <div class="img-list">
      <el-image v-for="url in urls" :key="url" :src="`${url}`" lazy></el-image>
    </div> -->
    <el-carousel :interval="5000" arrow="hover" indicator-position="none" :autoplay="false">
      <el-carousel-item v-for="(item, index) in carousel" :key="index">
        <!-- <div class="img-list"> -->
          <div class="image-container" v-for="image in item" :key="image.name">
            <el-image @click="goToInfo(image)" :fit="'contain'" :src="image.url">
              <div slot="placeholder" class="image-slot">
                加载中<span class="dot">...</span>
              </div>
            </el-image>
            <p>{{image.title}}</p>
          </div>
         
        <!-- </div> -->
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import * as r from './../../static/picture.json';
@Component({
	props: {},
	components: {},
})

export default class Content extends Vue {
	// public rows = r.default.data;
  public canShow = false;
  private carousel = [
    [
      {
        title: 'zflamp',
        describe: 'ZHONGFA_官网视觉设计，用数字营销助力中国企业走出国门',
        order: '01zflamp',
        url: require('assets/cover/01.jpg'),
      },
      {
        title: '黑桃圈',
        describe: '黑桃圈_APP视觉设计，德州扑克俱乐部、游戏端，炫黑风格助你梭哈',
        order: '02黑桃圈',
        url: require('assets/cover/02.jpg'),
      },
      {
        title: 'StarryU',
        describe: 'StarryU_网站视觉设计，面向全球中国留学生的一站式职业规划平台',
        order: '03StarryU',
        url: require('assets/cover/03.jpg'),
      },
      {
        title: '酷飞驾驶',
        describe: '酷飞驾驶_APP视觉设计，AI语音交互导航，智能周边服务查询',
        order: '04酷飞驾驶',
        url: require('assets/cover/04.jpg'),
      },
      {
        title: '熊二抓娃娃',
        describe: '熊二抓娃娃_APP视觉设计，整体采用黑黄对比色为主色调，活泼、灵动，让抓娃娃更有趣',
        order: '05熊二抓娃娃',
        url: require('assets/cover/05.png'),
      },
      {
        title: 'YS',
        describe: '优设_官网视觉设计，用数字营销驱动出口增长',
        order: '06YS',
        url: require('assets/cover/06.jpg'),
      },
      {
        title: '错题plus',
        describe: '错题plus_APP视觉设计，解析错题、记录笔记，一课、一练，让学习更简单',
        order: '07错题plus',
        url: require('assets/cover/07.png'),
      },
      {
        title: '优形',
        describe: '优形_H5视觉设计，健康管理和饮食托管平台',
        order: '08优形',
        url: require('assets/cover/08.jpg'),
      },
    ],
    [
      {
        title: 'Musiers',
        describe: 'Musiers_官网视觉设计，美国原创音乐人聚集平台',
        order: '09Musiers',
        url: require('assets/cover/09.png'),
      },
      {
        title: '6Road',
        describe: '6Road_APP视觉设计，整体风格采用极简风，大面积留白增强可读性，以橙色为主色调，橙白搭配干净清爽，活力十足',
        order: '10-6Road',
        url: require('assets/cover/10.jpg'),
      },
      {
        title: '美瑞健康',
        describe: '美瑞健康集团_官网视觉设计，一家香港上市的跨国医疗健康产业集团',
        order: '11美瑞健康',
        url: require('assets/cover/11.png'),
      },
      {
        title: '悬赏猫',
        describe: '悬赏猫_APP视觉设计，一款专注手机赚钱的APP',
        order: '12悬赏猫',
        url: require('assets/cover/12.png'),
      },
      {
        title: 'keepwell',
        describe: 'keepwell_APP视觉设计，一款健康生活APP，致力于用分享传递快乐、健康，拉近人们的距离',
        order: '13keepwell',
        url: require('assets/cover/13.jpg'),
      },
    ],
  ];

  private goToInfo(image: any) {
    delete image.url;
    this.$router.push({
      path: '/about',
      query: image,
    });
  }

}

</script>
<style lang="less">
.content {
    text-align: left;
    padding-top: 100px;
    font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
    margin-bottom: 30px;
    p.title {
        color: #4A4A4A;
        font-size: 48px;
        line-height: 48px;
        margin-bottom: 20px;
        span:first-child {
            opacity: 0.8;
            font-weight: normal;
        }
        span:last-child {
            font-family: Georgia;
            text-decoration: underline;
            opacity: initial;
        }
    }
    .detail {
        font-size: 20px;
        color: #000000;
        opacity: 0.8;
        line-height: 20px;
        margin-bottom: 100px;
    }
    .el-carousel {
      // margin-top: 40px;
      .el-carousel__container {
        height: 570px;
      }
      .el-carousel__item {
        display: grid;
        box-sizing: border-box;
        // justify-content: space-between;
        // grid-template-columns: repeat(4, 1fr);
        grid-template-columns: 25% 25% 25% 25%;
        grid-auto-rows: auto;
        grid-gap: 0 0;
        justify-items: center;
        align-items: center;
        // display: flex;
        // flex-wrap: wrap;
        // justify-content: space-between;
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
             padding: 2px 0;
             height: 18px;
             text-align: left;
          }
          .el-image {
            min-width: 296px;
            max-width: 326px;
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