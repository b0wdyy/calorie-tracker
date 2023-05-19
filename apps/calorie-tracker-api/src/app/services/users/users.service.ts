import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { PrismaService } from '@calorie-tracker/api-shell/prisma'
import { hashPassword } from '@calorie-tracker/api-shell/auth'

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
    console.log(user)
    user.password = hashPassword(user.password)

    return this.prismaService.user.create({
      data: user,
    })
  }
}
