import { authOptions } from '@calorie-tracker/app-shell'
import { RecipeWrapper } from '@calorie-tracker/components'
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
        <h1 className="mb-4 text-2xl font-bold">
          {greeting()}, {session.user.username}
        </h1>
      ) : (
        <h1>{greeting()}</h1>
      )}

      <p>What are you up to today?</p>

      <section className="mt-8">
        <h2 className="text-xl font-bold">Recipes to get inspiration</h2>

        <RecipeWrapper />
      </section>
    </div>
  )
}
