/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-08-02 16:14:35
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-08-02 16:14:35
 * @FilePath: \doc-tina\doc-tina\demo\next-project\prisma\prisma.module.ts
 */
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export default class PrismaModule {}
