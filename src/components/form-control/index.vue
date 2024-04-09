<template>
  <component :is="as" class="form">
    <slot />
  </component>
</template>

<script setup lang="ts">
import { provide } from "vue"
import { FormControl, FormControlEmit, CONTEXT_FORM } from './types';

const prop = withDefaults(defineProps<FormControl>(), {
  as: 'div'
});
const emits = defineEmits<FormControlEmit>();

const change = (val: string, on: boolean) => {
  let modelValue = prop.modelValue!;

  if (on) {
    modelValue?.push(val);
  } else {
    modelValue = modelValue.filter((e) => e !== val);
  }

  emits('update:model-value', modelValue)
}

provide(CONTEXT_FORM, {
  change
})
</script>

<style scoped lang="scss">
.form {
  border: 1px solid black;
  padding: 5px;
}
</style>