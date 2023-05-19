import { Module } from '@nestjs/common'
import { AuthModule } from '@calorie-tracker/api-shell/auth'

import { AppService } from './app.service'
import { FoodModule } from './food/food.module'

@Module({
  imports: [AuthModule, FoodModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
