<template>
  <slot />
</template>

<script setup lang="ts">
import { provide, computed, ref } from 'vue';
import { CONTEXT_SS } from "./types"


const props = defineProps<{
  modelValue: number
}>()

const emits = defineEmits<{
  (e: 'update:model-value', payload: number): void
}>()

const a = ref(props.modelValue)

const connect = () => {
  a.value++
  emits('update:model-value', a.value);
}

const disconnect = () => {
  a.value--;
  emits('update:model-value', a.value);
}

provide(CONTEXT_SS, {
  connect,
  disconnect
});
</script>
