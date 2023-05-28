import { SideNav } from '@calorie-tracker/ui/server'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SideNav />
      <main className="ml-72">{children}</main>
    </>
  )
}
