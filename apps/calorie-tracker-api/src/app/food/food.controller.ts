import { JwtAuthGuard } from '@calorie-tracker/api-shell/auth'
import { FoodDto } from '@calorie-tracker/types'
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common'

import { FoodService } from './food.service'

@Controller('food')
export class FoodController {
  constructor(private foodService: FoodService) {}

  @Get()
  async getFoods() {
    return this.foodService.getFoods()
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createFood(@Body() food: FoodDto) {
    return this.foodService.createFood(food)
  }

  @Get(':uuid')
  async getFood(@Param() uuid: string) {
    return this.foodService.getFoodByUuid(uuid)
  }
}
