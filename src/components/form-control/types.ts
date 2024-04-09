import { Component } from "vue";

export interface FormControl {
  modelValue ?: string[],
  as ?: string | Component
}

export interface FormControlEmit {
  (e: 'update:model-value', payload: string[]): void
}

export interface FormContext {
  change: (val: string, on: boolean) => void
}

export const CONTEXT_FORM = Symbol('formContext');