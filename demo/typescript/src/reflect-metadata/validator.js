"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-27 09:13:14
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-27 09:29:35
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\reflect-metadata\validator.ts
 */
require("reflect-metadata");
var TypeValidation;
(function (TypeValidation) {
    TypeValidation["String"] = "string";
    TypeValidation["Number"] = "number";
    TypeValidation["Boolean"] = "boolean";
})(TypeValidation || (TypeValidation = {}));
const validationMetadataKey = Symbol('expectedType');
const requiredMetadataKey = Symbol('requiredKeys');
function Required() {
    return (target, prop) => {
        const existRequiredKeys = Reflect.getMetadata(requiredMetadataKey, target) ?? [];
        Reflect.defineMetadata(requiredMetadataKey, [...existRequiredKeys, prop], target);
    };
}
function ValueType(type) {
    return (target, prop) => {
        Reflect.defineMetadata(validationMetadataKey, type, target, prop);
    };
}
class User {
}
__decorate([
    Required(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    Required(),
    __metadata("design:type", String)
], User.prototype, "passward", void 0);
__decorate([
    ValueType(TypeValidation.Number),
    __metadata("design:type", Number)
], User.prototype, "age", void 0);
const user = new User();
user.age = 18;
user.passward = '123';
user.name = 'JSTINA';
function validator(entity) {
    const clsName = entity.constructor.name;
    const messages = [];
    // 先检查所有必填属性
    const requiredKeys = Reflect.getMetadata(requiredMetadataKey, entity);
    console.log("==查看现在收集得必填字段==", requiredKeys);
    console.log("==查看clsName==", clsName);
    // 基于反射拿到所有存在的属性
    const existKeys = Reflect.ownKeys(entity);
    for (const key of requiredKeys) {
        if (!existKeys.includes(key)) {
            messages.push(`${clsName}.${key} should be required.`);
            // throw new Error(`${key} is required!`);
        }
    }
    // 接着基于定义在属性上的元数据校验属性类型
    for (const key of existKeys) {
        const expectedType = Reflect.getMetadata(validationMetadataKey, entity, key);
        if (!expectedType)
            continue;
        // 枚举也是对象，因此 Object.values 同样可以生效（只不过也会包括键名）
        // @ts-expect-error
        if (Object.values(TypeValidation).includes(expectedType)) {
            const actualType = typeof entity[key];
            if (actualType !== expectedType) {
                messages.push(`expect ${entity.constructor.name}.${String(key)} to be ${expectedType}, but got ${actualType}.`);
                // throw new Error(`${String(key)} is not ${expectedType}!`);
            }
        }
    }
    return messages;
}
console.log(validator(user));
