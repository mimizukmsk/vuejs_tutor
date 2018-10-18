// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Vueインスタンスを作成してAppコンポーネントをindex.htmlの #app に紐付け
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el => element ここで#app => id="app"を指定
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
