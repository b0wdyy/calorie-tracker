import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma/prisma.service'
import { hashPassword } from '../../auth/utils/hasher'
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
    console.log(user)
    user.password = hashPassword(user.password)

    return this.prismaService.user.create({
      data: user,
    })
  }
}
