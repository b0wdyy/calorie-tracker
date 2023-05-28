import { NextPage } from 'next'

export async function generateMetadata() {
  return {
    title: 'Settings | Calorie Tracker.',
  }
}

const Settings: NextPage = () => {
  return <div>Settings page</div>
}

export default Settings
