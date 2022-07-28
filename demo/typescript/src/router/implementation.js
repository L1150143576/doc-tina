"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routerFactory = exports.Post = exports.Get = exports.methodDecoratorFactory = exports.Controller = exports.REQUEST_METHOD = exports.METADATA_KEY = void 0;
/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-27 14:09:47
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-27 15:31:13
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\router\implementation.ts
 */
require("reflect-metadata");
var METADATA_KEY;
(function (METADATA_KEY) {
    METADATA_KEY["METHOD"] = "ioc:method";
    METADATA_KEY["PATH"] = "ioc:path";
    METADATA_KEY["MIDDLEWARE"] = "ioc:middleware";
})(METADATA_KEY = exports.METADATA_KEY || (exports.METADATA_KEY = {}));
var REQUEST_METHOD;
(function (REQUEST_METHOD) {
    REQUEST_METHOD["GET"] = "ioc:get";
    REQUEST_METHOD["POST"] = "ioc:post";
})(REQUEST_METHOD = exports.REQUEST_METHOD || (exports.REQUEST_METHOD = {}));
const Controller = (path) => {
    return (target) => {
        Reflect.defineMetadata(METADATA_KEY.PATH, path ?? '', target);
    };
};
exports.Controller = Controller;
const methodDecoratorFactory = (method) => {
    return (path) => {
        return (_target, _key, descriptor) => {
            Reflect.defineMetadata(METADATA_KEY.METHOD, method, descriptor.value);
            Reflect.defineMetadata(METADATA_KEY.PATH, path, descriptor.value);
        };
    };
};
exports.methodDecoratorFactory = methodDecoratorFactory;
exports.Get = (0, exports.methodDecoratorFactory)(REQUEST_METHOD.GET);
exports.Post = (0, exports.methodDecoratorFactory)(REQUEST_METHOD.POST);
//获取根路径，即Controller装饰器得入参
//获取这个类实例的原型对象
//在原型对象上基于方法名获得方法体，继而拿到定义的请求路径、请求方法、请求实现
const routerFactory = (ins) => {
    const prototype = Reflect.getPrototypeOf(ins);
    console.log(Reflect.ownKeys(prototype));
    const rootPath = (Reflect.getMetadata(METADATA_KEY.PATH, prototype.constructor));
    const methods = (Reflect.ownKeys(prototype).filter((item) => item !== 'constructor'));
    const collected = methods.map((m) => {
        const requestHandler = prototype[m];
        console.log(prototype, requestHandler, m);
        const path = Reflect.getMetadata(METADATA_KEY.PATH, requestHandler);
        const requestMethod = (Reflect.getMetadata(METADATA_KEY.METHOD, requestHandler).replace('ioc:', ''));
        return {
            path: `${rootPath}${path}`,
            requestMethod,
            requestHandler,
        };
    });
    return collected;
};
exports.routerFactory = routerFactory;
