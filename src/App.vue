<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {},
};
</script>

<style>
html{
  height: 100%;
}
body{
  min-height: 100%;
  margin: 0;
  padding: 0;
  position:relative;
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
