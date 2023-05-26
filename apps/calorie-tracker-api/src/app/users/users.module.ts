import { PrismaService } from '@calorie-tracker/api-shell/prisma'
import { Module } from '@nestjs/common'

import { UsersService } from './users.service'

@Module({
  providers: [UsersService, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
