import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
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
    return this.prismaService.user.create({
      data: user,
    })
  }
}
