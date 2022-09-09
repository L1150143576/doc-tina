/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-28 15:57:40
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-08-02 16:22:36
 * @FilePath: \doc-tina\doc-tina\demo\next-project\src\app.module.ts
 */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import PrismaModule from './prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
