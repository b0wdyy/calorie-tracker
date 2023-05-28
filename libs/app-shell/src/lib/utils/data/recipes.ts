import { Recipe } from '@prisma/client'

export async function getRecipes(): Promise<Recipe[]> {
  const data = await fetch(`${process.env['API_URL']}/recipes`)
  const recipes = await data.json()

  return recipes
}
