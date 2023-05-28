import { getRecipes } from '@calorie-tracker/app-shell'

import { RecipeItem } from './item'

export const RecipeWrapper = async () => {
  const recipes = await getRecipes()

  return (
    <div className="mt-2 flex items-center gap-8">
      {recipes.length
        ? recipes.map((recipe) => (
            <RecipeItem key={recipe.uuid} recipe={recipe} />
          ))
        : null}
    </div>
  )
}
