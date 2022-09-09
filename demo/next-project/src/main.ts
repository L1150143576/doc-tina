/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-28 15:57:40
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-08-02 16:54:30
 * @FilePath: \doc-tina\doc-tina\demo\next-project\src\main.ts
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
