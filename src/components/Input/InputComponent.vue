<template>
  <div class="cinput" :class="inputClass">
    <div v-if="prefix || $slots.prefix" class="cinput__prefix">
      <template v-if="prefix">
        <prefix />
      </template>
      <template v-else>
        <slot name="prefix" />
      </template>
    </div>
    <input
      class="cinput__input"
      v-bind="$attrs"
      :value="modelValue"
      @input="input"
      :disabled="disabled"
    />
    <div v-if="suffix || $slots.suffix" class="cinput__suffix">
      <template v-if="suffix">
        <suffix />
      </template>
      <template v-else>
        <slot name="suffix" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAttrs, computed, inject, onMounted, onBeforeUnmount } from "vue"
import { type Input, type InputEmit } from './types'
import { CONTEXT_FORM, type FormContext } from "../form-control/types";
import { CONTEXT_SS } from "../CountChild/types"

const props = withDefaults(defineProps<Input>(), {
  disabled: false,
  size: 'm',
})

const attrs: Record<string, any> = useAttrs();

const contextForm = inject(CONTEXT_FORM) as FormContext | undefined ?? undefined;
const ss = inject(CONTEXT_SS) as Record<string, any>;

onMounted(() => {
  ss.connect();
})

onBeforeUnmount(() => {
  ss.disconnect();
})

const emits = defineEmits<InputEmit>()

const input = (event: any) => {
  if (contextForm) {
    contextForm.change(attrs.value, event.target.checked);
  }

  emits('update:model-value', event.target.value) // string
}

const inputClass = computed(() => {
  return `cinput--${ props.size }`
})

defineOptions({
  name: "Input",
  inheritAttrs: false,
})
</script>

<style scoped lang="scss">
.cinput {
  display: inline-flex;
  gap: 4px;
  border: 1px solid black;
  border-radius: 5px;
  align-items: center;
  background-color: white;
  padding: 4px;
  box-sizing: border-box;

  & input {
    border: none;
    outline: none;
    background: none;
  }
}

.cinput--s {
  height: 24px;

  & .cinput__prefix {}

  & .cinput__input {
    font-size: 14px;
  }

  & .cinput__suffix {}
}

.cinput--m {
  height: 32px;

  & .cinput__prefix {}

  & .cinput__input {
    font-size: 17px;
  }

  & .cinput__suffix {}
}

.cinput--l {
  height: 44px;
  & .cinput__prefix {}

  & .cinput__input {
    font-size: 20px;
  }

  & .cinput__suffix {}
}
</style>