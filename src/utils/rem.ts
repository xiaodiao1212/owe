// rem等比适配配置文件
// 基准大小
const baseSize = 15.2;
// 设置 rem 函数
function setRem() {
  // 当前页面宽度相对于 1920宽的缩放比例，可根据自己需要修改。
//   const scale = document.documentElement.clientWidth / 1520;
//   设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
//   document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px';
//   if (document.documentElement.clientWidth > 1440) {
//     document.documentElement.style.fontSize = '14.4px';
//   } else if (document.documentElement.clientWidth < 1280) {
    document.documentElement.style.fontSize = '15.2px';
    // const sectionDom = document.getElementsByTagName('section')[0];
    // if (sectionDom.clientWidth > 1440) {
    //     const scale = 1440 / 1520;
    //     document.documentElement.style.fontSize = baseSize * scale + 'px';
    // }
    // if (sectionDom.clientWidth < 1280) {
    //     const scale = 1280 / 1520;
    //     document.documentElement.style.fontSize = baseSize * scale + 'px';
    // }
    // if (sectionDom.clientWidth <= 1440 && sectionDom.clientWidth >= 1280) {
    //     const scale = sectionDom.clientWidth / 1520;
    //     document.documentElement.style.fontSize = baseSize * scale * 0.8 + 'px';
    // }
//   } else {

//   }
  
}
// 初始化
setRem();
// window.onload = () => {
//     setRem();
// };
// 改变窗口大小时重新设置 rem
window.onresize = () => {
  setRem();
};
