import { PrismaModule } from '@calorie-tracker/api-shell/prisma'
import { Module } from '@nestjs/common'

import { RecipeController } from './recipe.controller'
import { RecipeService } from './recipe.service'

@Module({
  controllers: [RecipeController],
  providers: [RecipeService],
  exports: [],
  imports: [PrismaModule],
})
export class RecipeModule {}
