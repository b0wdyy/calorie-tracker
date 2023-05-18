import { LocalStrategy } from './local.strategy'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersModule } from '../services/users/users.module'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, LocalStrategy],
  exports: [AuthService],
})
export class AuthModule {}
