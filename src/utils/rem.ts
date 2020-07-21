// .layout {
//   width: 1120px;
//   margin: 0 auto;
// }
// @media screen and (min-width: 1120px){
//   /* body {
//     width: 1600px;
//   } */
//   .layout {
//     width: 1120px;
//     margin: 0 auto;
//   }
// }
// @media screen and (min-width: 1280px){
//   /* body {
//     width: 1600px;
//   } */
//   .layout {
//     width: 1120px;
//     margin: 0 auto;
//     padding: 0 80px;
//   }
// }
// @media screen and (min-width: 1440px){
//   /* body {
//     width: 1600px;
//   } */
//   .layout {
//     width: 1280px;
//     margin: 0 auto;
//     padding: 0 80px;
//   }
// }
// @media screen and (min-width: 1600px){
//   /* body {
//     width: 1600px;
//   } */
//   .layout {
//     width: 1440px;
//     margin: 0 auto;
//     padding: 0 80px;
//   }
// }
// rem等比适配配置文件
// 基准大小
const baseSize = 15.2;
// 设置 rem 函数
function setRem() {
  const width = document.getElementsByClassName('layout')[0].clientWidth;
  if (width >= 1440) {
    const scale = 1440 / 1520 * window.devicePixelRatio;
    document.documentElement.style.fontSize = baseSize * scale + 'px';
  }
  if (width <= 1120) {
    const scale = 1120 / 1520;
    document.documentElement.style.fontSize = baseSize * scale + 'px';
  }
  if (width <= 1440 && width >= 1120) {
    const scale = width / 1520;
    document.documentElement.style.fontSize = baseSize * scale + 'px';
  }
}
// 初始化
window.onload = () => {
    setRem();
};
// 改变窗口大小时重新设置 rem
window.onresize = () => {
  setRem();
};
