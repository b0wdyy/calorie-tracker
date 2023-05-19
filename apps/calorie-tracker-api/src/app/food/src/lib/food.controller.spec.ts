import { Test } from '@nestjs/testing'
import { CalorieTrackerApiSrcAppFoodController } from './food.controller'
import { CalorieTrackerApiSrcAppFoodService } from './food.service'

describe('CalorieTrackerApiSrcAppFoodController', () => {
  let controller: CalorieTrackerApiSrcAppFoodController

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CalorieTrackerApiSrcAppFoodService],
      controllers: [CalorieTrackerApiSrcAppFoodController],
    }).compile()

    controller = module.get(CalorieTrackerApiSrcAppFoodController)
  })

  it('should be defined', () => {
    expect(controller).toBeTruthy()
  })
})
