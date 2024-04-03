<template>
  <div class="cinput">
    <div v-if="prefix || $slots.prefix" class="cinput__prefix">
      <template v-if="prefix">
        <prefix />
      </template>
      <tempalate v-else>
        <slot name="prefix" />
      </tempalate>
    </div>
    <input
      class="cinput__input"
      v-bind="$attrs"
      :value="modelValue"
      @input="input"
      :disabled="disabled"
    />
    <div class="cinput__suffix">suf</div>
  </div>
</template>

<script setup lang="ts">
import { useAttrs, computed } from "vue"
import { type Input, type InputEmit } from './types'

const props = withDefaults(defineProps<Input>(), {
  disabled: false,
  size: 'm',
})

const emits = defineEmits<InputEmit>()

const input = (event: any) => {
  emits('update:model-value', event.target.value) // string
}

// [`cinput--${ props.size }`. 'disabled']

defineOptions({
  name: "Input",
  inheritAttrs: false,
})
</script>

<style scoped lang="scss">
.cinput {
  display: inline-flex;
  gap: 5px;
  border: 1px solid black;
  padding: 5px;
  border-radius: 5px;

  & input {
    border: none;
  }
}

.cinput--s {
  & .cinput__prefix {}

  & .cinput__input {}

  & .cinput__suffix {}

}
</style>