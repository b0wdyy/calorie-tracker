import { hashPassword } from '@calorie-tracker/api-shell/auth'
import { PrismaService } from '@calorie-tracker/api-shell/prisma'
import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  async findOne(email: string) {
    return this.prismaService.user.findUnique({
      where: {
        email,
      },
    })
  }

  async createOne(user: User) {
    user.password = hashPassword(user.password)

    return this.prismaService.user.create({
      data: user,
    })
  }
}
