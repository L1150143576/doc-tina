/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-27 18:36:16
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-27 18:50:52
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\ioc\container.ts
 */
type ClassStruct<T = any> = new (...args: any[]) => T;

class Container {
  private static services: Map<string, ClassStruct> = new Map();
  public static propertyRegistry: Map<string, string> = new Map();
  //注册service
  public static set(key: string, value: ClassStruct): void {
    Container.services.set(key, value);
  }
  //GET方法的实现
  //使用传入的标识符在容器内查找这个类是否已经注册，如果有则进行下一步，没有就返回 undefined。
  //对于已注册的类，首先将其实例化，然后检查 propertyRegistry ，查看这个类内部是否声明了对外部的依赖？
  //将这些外部依赖的类从容器中取出（同样通过 get 方法），然后实例化。
  //将这些实例传递给对应的属性。
  public static get<T = any>(key: string): T | undefined {
    // 检查是否注册
    const Cons = Container.services.get(key);
    if (!Cons) return undefined
    const ins = new Cons()
    //遍历注册信息
    for (const info of Container.propertyRegistry) {
      // 注入标识符与要注入类的标识符
      const [injectKey, serviceKey] = info;
      // 拆分为 Class 名与属性名
      const [classKey, propKey] = injectKey.split(':');

      // 如果不是这个类，就跳过
      if (classKey !== Cons.name) continue;

      // 取出需要注入的类，这里拿到的是已经实例化的
      const target = Container.get(serviceKey);

      if (target) {
        // 赋值给对应的属性
        ins[propKey] = target;
      }
    }
    return ins
  }

  private constructor() { }
}
function Provide(key: string): ClassDecorator {
  return (Target) => {
    Container.set(key, Target as unknown as ClassStruct);
  };
}

function Inject(key: string): PropertyDecorator {
  return (target, propertyKey) => {
    Container.propertyRegistry.set(`${target.constructor.name}:${String(propertyKey)}`, key)
  };
}
@Provide('DriverService')
class Driver {
  adapt(consumer: string) {
    console.log(`\n === 驱动已生效于 ${consumer}！===\n`);
  }
}

@Provide('Car')
class Car {
  @Inject('DriverService')
  driver!: Driver;

  run() {
    this.driver.adapt('Car');
  }
}

const car = Container.get<Car>('Car')!;

car.run();