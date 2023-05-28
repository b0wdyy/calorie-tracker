import { authOptions } from '@calorie-tracker/app-shell'
import { Apple, Book, FileText, Home, Settings } from 'lucide-react'
import Image from 'next/image'
import { getServerSession } from 'next-auth'

import { LogoutButton } from '../../button/logout'

import { SideNavItem } from './item'

export const SideNav = async () => {
  const session = await getServerSession(authOptions)

  return (
    <div className="fixed flex h-screen w-72 flex-col justify-between rounded-br-lg rounded-tr-lg bg-indigo-50 p-4 drop-shadow-lg">
      <div className="space-y-2">
        <h2 className="mb-4 text-xl font-bold tracking-wider">
          Calorie Tracker.
        </h2>
        <SideNavItem icon={<Home />} to="/">
          Home
        </SideNavItem>

        <SideNavItem icon={<Apple />} to="/foods">
          Food
        </SideNavItem>

        <SideNavItem icon={<FileText />} to="/guides">
          Guides
        </SideNavItem>

        {session?.user ? (
          <SideNavItem icon={<Book />} to="/journal">
            Journal
          </SideNavItem>
        ) : null}
      </div>

      {session?.user ? (
        <div className="space-y-4">
          <SideNavItem icon={<Settings />} to="/settings">
            Settings
          </SideNavItem>

          <div className="flex items-center gap-2 border-t border-t-slate-300 pt-4">
            <div className="relative h-14 w-14 overflow-hidden rounded-full object-contain">
              <Image
                src={session.user.image || ''}
                alt="profile picutre"
                fill={true}
              />
            </div>

            <div className="flex flex-1 items-center justify-between">
              <div className="flex flex-col">
                <span>
                  {session.user.first_name} {session.user.last_name}
                </span>

                <span className="text-slate-400">{session.user.email}</span>
              </div>

              <LogoutButton />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
