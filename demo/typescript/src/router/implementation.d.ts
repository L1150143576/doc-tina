import 'reflect-metadata';
export declare enum METADATA_KEY {
    METHOD = "ioc:method",
    PATH = "ioc:path",
    MIDDLEWARE = "ioc:middleware"
}
export declare enum REQUEST_METHOD {
    GET = "ioc:get",
    POST = "ioc:post"
}
export declare const Controller: (path?: string) => ClassDecorator;
export declare const methodDecoratorFactory: (method: string) => (path: string) => MethodDecorator;
export declare const Get: (path: string) => MethodDecorator;
export declare const Post: (path: string) => MethodDecorator;
declare type AsyncFunc = (...args: any[]) => Promise<any>;
interface ICollected {
    path: string;
    requestMethod: string;
    requestHandler: AsyncFunc;
}
export declare const routerFactory: <T extends object>(ins: T) => ICollected[];
export {};
