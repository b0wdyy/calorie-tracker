'use client'

import React from 'react'

interface FormFieldProps {
  children: React.ReactNode
}

export const FormField = ({ children }: FormFieldProps): JSX.Element => {
  return <div className="mb-2 flex flex-col gap-1">{children}</div>
}
