/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-27 08:53:49
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-27 09:11:01
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\reflect-metadata\internal-metadata.ts
 */
import 'reflect-metadata';

function DefineType(type: Object) {
  return Reflect.metadata('design:type', type);
}
function DefineParamTypes(...types: Object[]) {
  return Reflect.metadata('design:paramtypes', types);
}
function DefineReturnType(type: Object) {
  return Reflect.metadata('design:returntype', type);
}

@DefineParamTypes(String, Number)
class Foo {
  @DefineType(String)
  get name() {
    return 'linbudu';
  }

  @DefineType(Function)
  @DefineParamTypes(Number, Number)
  @DefineReturnType(Number)
  add(source: number, input: number): number {
    return source + input;
  }
}

const foo = new Foo();
// [ [Function: Number], [Function: Number] ]
const paramTypes = Reflect.getMetadata('design:paramtypes', Foo);
// [Function: Number]
const returnTypes = Reflect.getMetadata('design:returntype', foo, 'add');
// [Function: String]
const type = Reflect.getMetadata('design:type', foo, 'name');

class Bar {
  @DefineType(Foo)
  prop!: Foo;
}

const bar = new Bar();
// [class Foo]
const type2 = Reflect.getMetadata('design:type', bar, 'prop');