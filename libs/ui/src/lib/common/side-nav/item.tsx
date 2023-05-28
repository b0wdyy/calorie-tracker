import Link from 'next/link'
import React from 'react'

type SideNavItemProps = {
  icon: React.ReactNode
  to: string
  children: React.ReactNode
}

export const SideNavItem: React.FC<SideNavItemProps> = ({
  icon,
  to,
  children,
}) => {
  return (
    <Link
      href={to}
      className="group flex items-center gap-4 rounded-lg p-2 transition hover:bg-indigo-200">
      <span className="group-hover:text-indigo-600">{icon}</span>

      <span className="group-hover:text-indigo-600">{children}</span>
    </Link>
  )
}
