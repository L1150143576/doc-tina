/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-28 15:57:40
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-08-02 16:23:53
 * @FilePath: \doc-tina\doc-tina\demo\next-project\src\app.service.ts
 */
import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async query(): Promise<Article[]> {
    const res = await this.prisma.article.findMany();
    return res;
  }
}
