/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-27 14:09:47
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-27 15:31:13
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\router\implementation.ts
 */
import 'reflect-metadata';

export enum METADATA_KEY {
  METHOD = 'ioc:method',
  PATH = 'ioc:path',
  MIDDLEWARE = 'ioc:middleware',
}

export enum REQUEST_METHOD {
  GET = 'ioc:get',
  POST = 'ioc:post',
}

export const Controller = (path?: string): ClassDecorator => {
  return (target) => {
    Reflect.defineMetadata(METADATA_KEY.PATH, path ?? '', target);
  };
};

export const methodDecoratorFactory = (method: string) => {
  return (path: string): MethodDecorator => {
    return (_target, _key, descriptor) => {
      Reflect.defineMetadata(METADATA_KEY.METHOD, method, descriptor.value!);
      Reflect.defineMetadata(METADATA_KEY.PATH, path, descriptor.value!);
    };
  };
};

export const Get = methodDecoratorFactory(REQUEST_METHOD.GET);
export const Post = methodDecoratorFactory(REQUEST_METHOD.POST);

type AsyncFunc = (...args: any[]) => Promise<any>;

interface ICollected {
  path: string;
  requestMethod: string;
  requestHandler: AsyncFunc;
}


//获取根路径，即Controller装饰器得入参
//获取这个类实例的原型对象
//在原型对象上基于方法名获得方法体，继而拿到定义的请求路径、请求方法、请求实现
export const routerFactory = <T extends object>(ins: T): ICollected[] => {
  const prototype = Reflect.getPrototypeOf(ins) as any;
  const rootPath = <string>(
    Reflect.getMetadata(METADATA_KEY.PATH, prototype.constructor)
  );

  const methods = <string[]>(
    Reflect.ownKeys(prototype).filter((item) => item !== 'constructor')
  );

  const collected = methods.map((m) => {
    const requestHandler = prototype[m];
    const path = <string>Reflect.getMetadata(METADATA_KEY.PATH, requestHandler);

    const requestMethod = <string>(
      Reflect.getMetadata(METADATA_KEY.METHOD, requestHandler).replace(
        'ioc:',
        ''
      )
    );

    return {
      path: `${rootPath}${path}`,
      requestMethod,
      requestHandler,
    };
  });
  return collected;
};