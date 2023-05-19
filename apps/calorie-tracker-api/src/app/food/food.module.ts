import { Module } from '@nestjs/common'
import { PrismaModule } from '@calorie-tracker/api-shell/prisma'

import { FoodController } from './food.controller'
import { FoodService } from './food.service'

@Module({
  controllers: [FoodController],
  providers: [FoodService],
  exports: [FoodService],
  imports: [PrismaModule],
})
export class FoodModule {}
