<template>
  <div>
    {{ msg }}
    <form>
      <button>Add task</button>
      <button>Delete finished task</button>
      <p>input: <input type="text"></p>
      <p>task:</p>
    </form>
    <div class="task-list">
      <!-- v-forでfor文形式で要素を繰り返すことができる -->
      <!-- todo in todos で、dataのtodos配列を一個ずつ取り出している -->
      <!-- また、:key は各々のフォームを動的に使用する際に、与えた項目のどの要素でフォームと紐付ける(バインド)かを決定する -->
      <label class="task-list__item" v-for="todo in todos" :key="todo.id">
        <!-- todo.text で、todoのtextプロパティを呼べる -->
        <input type="checkbox"><button>Edit</button>{{ todo.text }}
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
      ]
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
