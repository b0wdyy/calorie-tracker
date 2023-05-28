import { NextPage } from 'next'

export async function generateMetadata() {
  return {
    title: 'Recipes | Calorie Tracker.',
  }
}

const RecipesPage: NextPage = () => {
  return <div>recipes pages</div>
}

export default RecipesPage
