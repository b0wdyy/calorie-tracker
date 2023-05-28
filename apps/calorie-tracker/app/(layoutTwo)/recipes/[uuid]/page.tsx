import { NextPage } from 'next'

type RecipesDetailPageProps = {
  params: {
    uuid: string
  }
}
export async function generateMetadata() {
  return {
    title: 'Recipes | Calorie Tracker.',
  }
}

const RecipesDetailPage: NextPage<RecipesDetailPageProps> = ({ params }) => {
  return <div>{params.uuid}</div>
}

export default RecipesDetailPage
