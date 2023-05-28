'use client'

import { LucideLogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'

export const LogoutButton = () => (
  <button onClick={() => signOut()}>
    <LucideLogOut />
  </button>
)
