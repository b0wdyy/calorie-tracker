import { Logger } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { PrismaService } from '@calorie-tracker/api-shell/prisma'

import { AppModule } from './app/app.module'
import { PrismaClientExceptionFilter } from './app/filters/prisma-client-exception.filter'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const globalPrefix = 'api'
  app.setGlobalPrefix(globalPrefix)
  app.useGlobalFilters(new PrismaClientExceptionFilter())
  app.enableCors()
  const port = process.env.PORT || 3000

  const prismaService = app.get(PrismaService)
  await prismaService.enableShutdownHooks(app)

  await app.listen(port)
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  )
}

bootstrap()
