'use client'

import { ComponentProps } from 'react'

interface FormInputProps extends ComponentProps<'input'> {
  type: string
  prefixIcon?: JSX.Element
  suffixIcon?: JSX.Element
}

export const FormInput = ({
  type,
  prefixIcon,
  suffixIcon,
  ...props
}: FormInputProps) => {
  return (
    <div className="rounded-md border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-violet-300 focus-within:ring-offset-2">
      {prefixIcon}
      <input
        type={type}
        className="border-none bg-transparent focus:outline-none focus:ring-0"
        {...props}
      />
      {suffixIcon}
    </div>
  )
}
