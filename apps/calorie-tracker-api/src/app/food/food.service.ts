import { Injectable } from '@nestjs/common'
import { PrismaService } from '@calorie-tracker/api-shell/prisma'
import { FoodDto } from '@calorie-tracker/types'

@Injectable()
export class FoodService {
  constructor(private prismaService: PrismaService) {}

  getFoods() {
    return this.prismaService.food.findMany()
  }

  async createFood(food: FoodDto) {
    return this.prismaService.food.create({
      data: food,
    })
  }

  getFoodByUuid(uuid: string) {
    return this.prismaService.food.findUnique({
      where: {
        uuid,
      },
    })
  }
}
