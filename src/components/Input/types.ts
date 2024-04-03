/*
1.	Состояния default, hover, active/focused, disabled
2.	Размеры s, m, l
3.	Placeholder
4.	Prefix, suffix
*/

// export enum size {
//   s = "s",
//   m = "m",
//   l = "l"
// }

// component is || string | Component

import { Component } from "vue";

export const size = ["s", "m", "l"] as const;
type InputSize = typeof size[number];

export interface Input {
  disabled ?: boolean
  size ?: InputSize
  prefix ?: Component
  suffix ?: Component
  modelValue ?: string | number
}

// Record<string, any[]>
export interface InputEmit {
  (e: 'update:model-value', payload: string | number): void
}
