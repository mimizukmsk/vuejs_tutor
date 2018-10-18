<!-- *.vue => Vueコンポーネント。vue-loaderモジュールでブラウザで読み込める形にコンパイルされる -->
<!-- Vueのコンポーネントという概念では、html, JS, CSSをひとまとめにして再利用性や見通しを良くすることに重点を置いている -->
<template>
  <!-- モジュールのhtmlを書く -->
  <div id="app">
    <img src="./assets/logo.png">
    <!-- router-viewの動作はvue-router.Routerを読み込んだrouter/index.jsに定義される -->
    <router-view/>
  </div>
</template>

<script>
// JavaScriptを書く
// Appコンポーネントを定義
export default {
  name: 'App'
}
</script>

<style>
/* CSSを書く */
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
