'use client'

import React, { ComponentProps } from 'react'

interface ButtonProps extends ComponentProps<'button'> {
  children: React.ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={`${props.className} rounded-md bg-violet-600 px-6 py-2 text-sm uppercase text-white transition hover:bg-violet-500 active:bg-violet-700`}>
      {children}
    </button>
  )
}
