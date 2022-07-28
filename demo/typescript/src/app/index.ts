/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-28 10:59:35
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-28 11:46:59
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\app\index.ts
 */
import { util } from '../utils';
import { core } from '../core';
import { ui } from '../ui';

export const app = () => {
  ui();
  core();
  util();
  console.log('app!');
};
app()