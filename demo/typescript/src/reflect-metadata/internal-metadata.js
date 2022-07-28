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
 * @Date: 2022-07-27 08:53:49
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-27 09:11:01
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\reflect-metadata\internal-metadata.ts
 */
require("reflect-metadata");
function DefineType(type) {
    return Reflect.metadata('design:type', type);
}
function DefineParamTypes(...types) {
    return Reflect.metadata('design:paramtypes', types);
}
function DefineReturnType(type) {
    return Reflect.metadata('design:returntype', type);
}
let Foo = class Foo {
    get name() {
        return 'linbudu';
    }
    add(source, input) {
        return source + input;
    }
};
__decorate([
    DefineType(String),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], Foo.prototype, "name", null);
__decorate([
    DefineType(Function),
    DefineParamTypes(Number, Number),
    DefineReturnType(Number),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Foo.prototype, "add", null);
Foo = __decorate([
    DefineParamTypes(String, Number)
], Foo);
const foo = new Foo();
// [ [Function: Number], [Function: Number] ]
const paramTypes = Reflect.getMetadata('design:paramtypes', Foo);
// [Function: Number]
const returnTypes = Reflect.getMetadata('design:returntype', foo, 'add');
// [Function: String]
const type = Reflect.getMetadata('design:type', foo, 'name');
class Bar {
}
__decorate([
    DefineType(Foo),
    __metadata("design:type", Foo)
], Bar.prototype, "prop", void 0);
const bar = new Bar();
// [class Foo]
const type2 = Reflect.getMetadata('design:type', bar, 'prop');
