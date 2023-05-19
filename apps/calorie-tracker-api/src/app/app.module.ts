import { Module } from '@nestjs/common'
import { AuthModule } from '@calorie-tracker/api-shell/auth'
import { FoodModule } from '@calorie-tracker/calorie-tracker-api/src/app/food'

import { AppService } from './app.service'

@Module({
  imports: [AuthModule, FoodModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
