'use client'
import { useSession } from 'next-auth/react'

export default function Index() {
  const session = useSession()
  console.log(session)

  return (
    <div>
      <p>hoi</p>
    </div>
  )
}
