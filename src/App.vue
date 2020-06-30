<template>
  <div id="app">
    <div class="layout">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {},
};
</script>

<style>
@media screen and (min-width: 1120px){
  /* body {
    width: 1600px;
  } */
  .layout {
    width: 1120px;
    margin: 0 auto;
  }
}
@media screen and (min-width: 1280px){
  /* body {
    width: 1600px;
  } */
  .layout {
    width: 1120px;
    margin: 0 auto;
    padding: 0 80px;
  }
}
@media screen and (min-width: 1440px){
  /* body {
    width: 1600px;
  } */
  .layout {
    width: 1280px;
    margin: 0 auto;
    padding: 0 80px;
  }
}
@media screen and (min-width: 1600px){
  /* body {
    width: 1600px;
  } */
  .layout {
    width: 1440px;
    margin: 0 auto;
    padding: 0 80px;
  }
}

html{
  height: 100%;
}
body{
  min-height: 100%;
  margin: 0;
  padding: 0;
  position:relative;
  margin: 0 auto;
}
*::-webkit-scrollbar {
  display: none;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
p {
  margin: 0;
  padding: 0;
}
</style>
