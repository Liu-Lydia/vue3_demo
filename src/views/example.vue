<template>
  <div class="example">
    <div class="example__ex">
      <!-- {{ counter }}<br> -->
      {{ counter.count }}<br>
      {{ counter.doubleCount }}<br>
      <button @click="counter.increment">Click Me</button>
      <h1>測試</h1>
      <h2>測試</h2>
      <h3>測試</h3>
      <h6>測試</h6>
      <h6 class="contentText">Mobile Body1  16px  用於sm 正文</h6>
      <h6 class="markText">Body 2  14px  用於備註文字</h6>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ExampleIndex',
}
</script>
<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>
<style lang="scss" scoped>
.example {
  &__ex {
    padding: 16px;

    &:not(:last-of-type) {
      border-bottom: 1px solid gray;
    }
  }
}
</style>
