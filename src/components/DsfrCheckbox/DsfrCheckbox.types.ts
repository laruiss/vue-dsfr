import type { InputHTMLAttributes } from 'vue'

export type DsfrCheckboxProps = {
  id?: string
  name: string
  required?: boolean
  value: unknown
  checked?: boolean
  modelValue: Array<unknown>
  small?: boolean
  inline?: boolean
  readonly?: boolean
  readonlyOpacity?: number
  label?: string
  errorMessage?: string
  validMessage?: string
  hint?: string
}

type PropsWithoutModelValue = Omit<DsfrCheckboxProps, 'modelValue'>

export type DsfrCheckboxSetProps = {
  titleId?: string
  disabled?: boolean
  inline?: boolean
  required?: boolean
  small?: boolean
  errorMessage?: string
  validMessage?: string
  legend?: string
  options?: (PropsWithoutModelValue & InputHTMLAttributes)[]
  modelValue?: Array<unknown>
  ariaInvalid?: boolean
}
