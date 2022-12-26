<template>
  <div class="example">
    <div class="example__ex">
      <!-- {{ counter }}<br> -->
      {{ counter.count }}<br>
      {{ counter.doubleCount }}<br>
      <button @click="counter.increment">Click Me</button>
      <h1>H1  58px 用於lg大標題</h1>
      <h2>H2  33px 用於sm大標題</h2>
      <h3>H3  24px  用於page標題</h3>
      <h6>Title  18px 用於項目標題</h6>
      <p>Dask Body1  18px  用於 lg & md 正文</p>
      <h6 class="markText">Body 2  14px  用於備註文字</h6>
      <button class="hollowButton">按鈕</button>
      <button class="solidButton">按鈕</button>
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
