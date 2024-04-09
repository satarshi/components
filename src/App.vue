<template>
  <!-- <div class="checkValue">value: {{ a }}</div>
  <CInput v-model="a" size="m" placeholder="Введите что-нибудь">
    <template #prefix>pre</template>
  </CInput>
  <div>
    {{b}}
  </div>

  <FormControl v-model="b">
    <CInput type="checkbox" value="asd" />
    <CInput type="checkbox" value="dsf" />
    <CInput type="checkbox" value="qws" />
  </FormControl> -->

  <div>
    {{ c }}
  </div>
  <CounterComp v-model="c">
    <CInput type="checkbox" value="asd" />
    <CInput type="checkbox" value="dsf" />
    <CInput type="checkbox" value="qws" />
    <CInput type="checkbox" value="asd" />
    <CInput type="checkbox" value="dsf" />
    <CInput type="checkbox" value="qws" />
  </CounterComp>
</template>

<script setup lang="ts">
import { CInput } from "./components/Input"
import { FormControl } from './components/form-control'

import CounterComp from "./components/CountChild/index.vue"

import { ref } from "vue"

const a = ref('')

const b = ref([]);
const c = ref(0);
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

html {
  background-color: rgb(243, 243, 243);
}

.checkValue {
  height: 32px;
}
</style>
