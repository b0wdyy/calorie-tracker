import { authOptions } from '@calorie-tracker/app-shell'
import { ProfileForm } from '@calorie-tracker/components'
import { Title } from '@calorie-tracker/ui/server'
import { User } from '@prisma/client'
import { getServerSession } from 'next-auth'

export async function generateMetadata() {
  return {
    title: 'Settings | Calorie Tracker.',
  }
}

const Settings = async () => {
  const session = await getServerSession(authOptions)
  const user = session?.user as User

  return (
    <div className="px-8 py-4">
      <Title classes="mb-6">Settings</Title>
      {user ? <ProfileForm user={user} /> : <p>Loading...</p>}
    </div>
  )
}

export default Settings
