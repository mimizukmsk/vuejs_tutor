<template>
  <div>
    {{ msg }}
    <form>
      <!-- JS内のイベントとボタンのクリックをバインド -->
      <!-- また、v-on: => @ なので、@clickとも書ける -->
      <button v-on:click="addTodo()">Add task</button>
      <button @click="removeTodo()">Delete finished task</button>
      <!-- 双方向バインディング => JS側と画面側で互いを紐付けて、片方の変更がもう片方に相互に反映されるようになる -->
      <p>input: <input type="text" v-model="newTodo"></p>
      <!-- 上記inputに入力された値がJSに送られ、こちらに表示される -->
      <p>task: {{ newTodo }}</p>
    </form>
    <div class="task-list">
      <!-- v-forでfor文形式で要素を繰り返すことができる -->
      <!-- todo in todos で、dataのtodos配列を一個ずつ取り出している -->
      <!-- また、:key は各々のフォームを動的に使用する際に、与えた項目のどの要素でフォームと紐付ける(バインド)かを決定する -->
      <label class="task-list__item" v-for="todo in todos" :key="todo.id">
        <!-- todo.text で、todoのtextプロパティを呼べる -->
        <!-- checkboxをtodoのdoneプロパティとバインド -->
        <input type="checkbox" v-model="todo.done"><button>Edit</button>{{ todo.text }}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      todos: [
        {text: 'vue-router', done: false},
        {text: 'vuex', done: false},
        {text: 'vue-loader', done: false},
        {text: 'awesome-vue', done: true}
      ],
      // HTMLで値が入力されるので、空白文字列で初期化
      newTodo: ''
    }
  },
  methods: {
    addTodo: function (event) {
      // trim => 呼び出し元の両端から空白を取り除く
      // a && b => a が trueなら b を代入
      let text = this.newTodo && this.newTodo.trim()
      // 何も入力されていなければそのまま
      if (!text) {
      }
      // 入力されていればtodosに入れる
      this.todos.push({
        text: text,
        done: false
      })
      // 再びnewTodoを空文字列に
      this.newTodo = ''
    },
    removeTodo: function (event) {
      for (let i = this.todos.length - 1; i >= 0; i--) {
        // もしdone===trueのtodoがあれば、リストから消去する
        // splice(i, n, e) => 配列の内容を変更する。iのindexの前からn個の要素に対してeを追加する
        if (this.todos[i].done) this.todos.splice(i, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin flex-vender() {
  display: flex;
  display: -webkit-flex;
  display: -moz-flex;
  display: -ms-flex;
  display: -o-flex;
}
.task-list {
  @include flex-vender;
  flex-direction: column;
  align-items: center;
  &__item {
    width: 270px;
    text-align: left;
    $element: #{&};
    &--checked {
      @extend #{$element};
      color: #85a6c6;
    }
  }
}
</style>
