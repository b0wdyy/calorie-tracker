import { AuthModule } from '@calorie-tracker/api-shell/auth'
import { Module } from '@nestjs/common'

import { AppService } from './app.service'
import { FoodModule } from './food/food.module'
import { RecipeModule } from './recipe/recipe.module'
import { UsersModule } from './users/users.module'

@Module({
  imports: [AuthModule, UsersModule, FoodModule, RecipeModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
