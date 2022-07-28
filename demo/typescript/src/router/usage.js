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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-27 14:29:42
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-27 14:29:42
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\router\usage.ts
 */
const http_1 = __importDefault(require("http"));
const implementation_1 = require("./implementation");
let UserController = class UserController {
    async userList() {
        return {
            success: true,
            code: 10000,
            data: [
                {
                    name: 'linbudu',
                    age: 18,
                },
                {
                    name: '林不渡',
                    age: 28,
                },
            ],
        };
    }
    async addUser() {
        return {
            success: true,
            code: 10000,
        };
    }
};
__decorate([
    (0, implementation_1.Get)('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "userList", null);
__decorate([
    (0, implementation_1.Post)('/add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "addUser", null);
UserController = __decorate([
    (0, implementation_1.Controller)('/user')
], UserController);
const collected = (0, implementation_1.routerFactory)(new UserController());
console.log(collected);
http_1.default
    .createServer((req, res) => {
    for (const info of collected) {
        if (req.url === info.path &&
            req.method === info.requestMethod.toLocaleUpperCase()) {
            info.requestHandler().then((data) => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(data));
            });
        }
    }
})
    .listen(3000)
    .on('listening', () => {
    console.log('Server ready at http://localhost:3000 \n');
    console.log('GET /user/list at http://localhost:3000/user/list \n');
    console.log('POST /user/add at http://localhost:3000/user/add \n');
});
