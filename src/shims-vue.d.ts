declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// 为一些没有.d.ts的插件做声明
declare module 'vue-awesome-swiper'
declare module 'object-fit-images'
declare module "*.json" {
  const value: any;
  export default value;
 }