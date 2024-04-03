<template>
  <div>{{ a }}</div>
  <CInput v-model="a">
    <template #prefix >sd</template>
  </CInput>
</template>

<script setup lang="ts">
import { CInput } from "./components/Input"

import { ref } from "vue"

const a = ref('')

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  box-sizing: border-box;
}
</style>
