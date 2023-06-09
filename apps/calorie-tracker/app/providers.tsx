'use client'

import { Session } from 'next-auth'
import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { Toaster } from 'react-hot-toast'

type Props = {
  session: Session
  children: React.ReactNode
}

export default function NextAuthProvider({ children, session }: Props) {
  return (
    <SessionProvider session={session}>
      {children}
      <Toaster />
    </SessionProvider>
  )
}
