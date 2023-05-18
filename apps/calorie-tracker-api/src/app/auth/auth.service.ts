import { HasherUtil } from './utils/hasher'
import { Injectable } from '@nestjs/common'
import { UsersService } from '../services/users/users.service'
import { User } from '@prisma/client'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(
    email: string,
    password: string
  ): Promise<Omit<User, 'password'>> {
    const user = await this.usersService.findOne(email)

    if (!user || !HasherUtil.comparePassword(password, user.password)) {
      return null
    }

    const { password: userPass, ...result } = user

    return result
  }

  async login(user: User) {
    const payload = { email: user.email, sub: user.uuid }

    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  async register(user: User) {
    try {
      await this.usersService.createOne(user)
    } catch (e) {
      console.log(e)
    }
  }
}
