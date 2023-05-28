import { Controller, Get, Param } from '@nestjs/common'

import { RecipeService } from './recipe.service'

@Controller('recipes')
export class RecipeController {
  constructor(private recipeService: RecipeService) {}

  @Get()
  async getRecipes() {
    return this.recipeService.findAll()
  }

  @Get(':uuid')
  async getOne(@Param() uuid: string) {
    return this.recipeService.findOne(uuid)
  }
}
