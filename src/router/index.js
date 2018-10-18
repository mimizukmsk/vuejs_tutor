import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

// vue-routerはルーティングと対応して出力するコンポーネントを決めている
Vue.use(Router)

export default new Router({
  // '/' にアクセスしたら HelloWorld コンポーネントを出力する
  routes: [
    // ルーティングの追加は、routesの配列に以下の形の記述を続けて書けば良い
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }
    // {
    //   path: '/hoge',
    //   name: 'Hoge',
    //   component: Hoge
    // },
  ]
})
