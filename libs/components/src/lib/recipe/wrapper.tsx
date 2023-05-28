import { getRecipes } from '@calorie-tracker/app-shell'

import { RecipeItem } from './item'

export const RecipeWrapper = async () => {
  const recipes = await getRecipes()

  return (
    <div className="no-scrollbar mt-2 flex snap-x items-center gap-8 overflow-x-auto pb-4">
      {recipes.length
        ? recipes.map((recipe) => (
            <RecipeItem key={recipe.uuid} recipe={recipe} />
          ))
        : null}
    </div>
  )
}
