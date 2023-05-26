import { Session } from 'next-auth'
import React from 'react'

import './global.css'
import NextAuthProvider from './providers'

type Props = {
  session: Session
  children: React.ReactNode
}

export default function RootLayout({ children, session }: Props) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
