<template>
  <div>
    {{ msg }}
    <form>
      <button @click="addTodo()">Add task</button>
      <button @click="removeTodo()">Delete finished task</button>
      <p>input: <input type="text" v-model="newTodo"></p>
      <p>task: {{ newTodo }}</p>
    </form>
    <div class="task-list">
      <!-- todo.done が true の場合、checked のクラスを付与する-->
      <label class="task-list__item"
             v-for="todo in todos"
             v-bind:key="todo.id"
             v-bind:class="{ 'task-list__item--checked': todo.done }">
        <input type="checkbox" v-model="todo.done">
        <input type="checkbox" v-model="todo.editing">
        <input v-if="todo.editing" v-model="todo.text" @keyup.enter="todo.editing = !todo.editing">
        <span v-else>{{ todo.text }}</span>
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
        // 完了しているかどうかの検知
        done: false,
        // 編集状態を検知
        editing: false
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
