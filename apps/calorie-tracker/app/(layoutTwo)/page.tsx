import { authOptions } from '@calorie-tracker/app-shell'
import { RecipeWrapper } from '@calorie-tracker/components'
import { Title } from '@calorie-tracker/ui/server'
import { getServerSession } from 'next-auth'

export async function generateMetadata() {
  return {
    title: 'Home | Calorie Tracker.',
  }
}

export default async function Index() {
  const session = await getServerSession(authOptions)

  const greeting = () => {
    const hours = new Date().getHours()
    if (hours > 6 && hours < 12) {
      return 'Good morning'
    } else if (hours < 18) {
      return 'Good afternoon'
    } else if (hours < 22) {
      return 'Good evening'
    }

    return 'Good night'
  }

  return (
    <div className="px-8 py-4">
      {session?.user ? (
        <Title classes="mb-4">
          {greeting()}, {session.user.username}
        </Title>
      ) : (
        <h1>{greeting()}</h1>
      )}

      <p>What are you up to today?</p>

      <section className="mt-8">
        <Title type="h2" classes="mb-2">
          Recipes to get inspiration
        </Title>

        <RecipeWrapper />
      </section>
    </div>
  )
}
