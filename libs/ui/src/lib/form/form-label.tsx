'use client'

import React, { ComponentProps } from 'react'

interface FormLabelProps extends ComponentProps<'label'> {
  children: React.ReactNode
}

export const FormLabel = ({
  children,
  ...props
}: FormLabelProps): JSX.Element => {
  return (
    <label className="text-sm text-slate-700" {...props}>
      {children}
    </label>
  )
}
