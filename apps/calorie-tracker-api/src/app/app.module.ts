import { AuthModule } from './auth/auth.module'
import { Module } from '@nestjs/common'

import { AppService } from './app.service'

@Module({
  imports: [AuthModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
