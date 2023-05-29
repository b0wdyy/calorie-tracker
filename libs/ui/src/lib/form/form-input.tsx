'use client'

import React, { ComponentPropsWithRef } from 'react'

interface FormInputProps extends ComponentPropsWithRef<'input'> {
  type: string
  prefixIcon?: JSX.Element
  suffixIcon?: JSX.Element
}

export const FormInput: React.FC<FormInputProps> = React.forwardRef(
  ({ type, prefixIcon, suffixIcon, ...props }, ref) => {
    return (
      <div className="rounded-md border border-slate-300 bg-white focus-within:ring-2 focus-within:ring-violet-300 focus-within:ring-offset-2">
        {prefixIcon}
        <input
          ref={ref}
          type={type}
          className="w-full border-none bg-transparent focus:outline-none focus:ring-0"
          {...props}
        />
        {suffixIcon}
      </div>
    )
  }
)
