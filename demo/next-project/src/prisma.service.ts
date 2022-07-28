/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-28 17:22:33
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-28 17:24:48
 * @FilePath: \study\doc-tina\doc-tina\demo\next-project\src\prisma.service.ts
 */
import {
  Injectable,
  OnApplicationShutdown,
  OnApplicationBootstrap,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnApplicationBootstrap, OnApplicationShutdown
{
  constructor() {
    super();
  }
  //启动数据库链接
  async onApplicationBootstrap() {
    await this.$connect();
  }
  //停止数据库连接
  async onApplicationShutdown() {
    await this.$disconnect();
  }
}
