import { LocalStrategy } from './strategies/local.strategy'
import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { UsersModule } from '../../../../apps/calorie-tracker-api/src/app/services/users/users.module'
import { PassportModule } from '@nestjs/passport'
import { AuthController } from './auth.controller'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from './strategies/jwt.strategy'

@Module({
  controllers: [AuthController],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: process.env['SECRET'],
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
