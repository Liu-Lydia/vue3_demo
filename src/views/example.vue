<template>
  <div class="example">
    <div class="example__ex">
      <!-- {{ counter }}<br> -->
      {{ counter.count }}<br>
      {{ counter.doubleCount }}<br>
      <button @click="counter.increment">Click Me</button>
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
