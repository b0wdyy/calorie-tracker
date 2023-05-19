import { Test } from '@nestjs/testing'
import { CalorieTrackerApiSrcAppFoodService } from './food.service'

describe('CalorieTrackerApiSrcAppFoodService', () => {
  let service: CalorieTrackerApiSrcAppFoodService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CalorieTrackerApiSrcAppFoodService],
    }).compile()

    service = module.get(CalorieTrackerApiSrcAppFoodService)
  })

  it('should be defined', () => {
    expect(service).toBeTruthy()
  })
})
