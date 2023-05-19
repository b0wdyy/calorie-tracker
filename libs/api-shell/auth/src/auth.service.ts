import { Injectable } from '@nestjs/common'
import { User } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'

import { UsersService } from '../../../../apps/calorie-tracker-api/src/app/services/users/users.service'
import { comparePassword } from './utils/hasher'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<Omit<User, 'password'> | null> {
    const user = await this.usersService.findOne(email)

    if (!user || !comparePassword(password, user.password)) {
      return null
    }

    const { password: _, ...result } = user

    return result
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.uuid }

    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async register(user: User) {
    const { password, ...rest } = await this.usersService.createOne(user)
    return rest
  }
}
