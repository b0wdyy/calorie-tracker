import { Recipe } from '@prisma/client'
import { Clock } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type RecipeItemProps = {
  recipe: Recipe
}

export const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => {
  return (
    <Link
      href={`/recipes/${recipe.uuid}`}
      className="flex h-20 w-80 shrink-0 snap-start items-center overflow-hidden rounded-lg shadow-lg">
      <div className="relative h-full w-20">
        <Image
          className="object-cover"
          src={recipe.image}
          fill={true}
          alt={`picture of ${recipe.name}`}
        />
      </div>

      <div className="p-2">
        <p className="font-bold">{recipe.name}</p>
        <div className="flex items-center gap-2 text-slate-400">
          <Clock size={16} />
          <span>{recipe.preparation_time}</span>
        </div>
      </div>
    </Link>
  )
}
