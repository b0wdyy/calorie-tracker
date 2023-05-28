import { PrismaService } from '@calorie-tracker/api-shell/prisma'
import { Injectable } from '@nestjs/common'
import { Recipe } from '@prisma/client'

@Injectable()
export class RecipeService {
  constructor(private prismaService: PrismaService) {}

  async findAll() {
    return this.prismaService.recipe.findMany()
  }

  async findOne(uuid: string) {
    return this.prismaService.recipe.findUniqueOrThrow({
      where: {
        uuid,
      },
    })
  }

  async saveOne(recipe: Recipe) {
    return this.prismaService.recipe.create({
      data: recipe,
    })
  }
}
