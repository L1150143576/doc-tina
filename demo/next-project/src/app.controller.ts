/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-28 15:57:40
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-28 16:19:44
 * @FilePath: \study\doc-tina\doc-tina\demo\next-project\src\app.controller.ts
 */
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
