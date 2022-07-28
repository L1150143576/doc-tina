/*
 * @Author: luoxiaoting
 * @Description: Do not edit
 * @Date: 2022-07-27 18:58:28
 * @LastEditors: luoxiaoting
 * @LastEditTime: 2022-07-27 19:43:10
 * @FilePath: \study\doc-tina\doc-tina\demo\typescript\src\ioc\container-by-metadata.ts
 */
import 'reflect-metadata';
type ClassStruct<T = any> = new (...args: any[]) => T;

type ServiceKey<T = any> = string | ClassStruct<T> | Function;

class Container {
  private static services: Map<ServiceKey, ClassStruct> = new Map();

  // Class:prop serviceKey
  public static propertyRegistry: Map<string, string> = new Map();

  public static set(key: ServiceKey, value: ClassStruct): void {
    Container.services.set(key, value);
  }

  public static get<T = any>(key: ServiceKey): T | undefined {
    // 检查是否注册
    const Cons = Container.services.get(key);

    if (!Cons) {
      return undefined;
    }

    // 实例化这个类
    const ins = new Cons();

    // 遍历注册信息
    for (const info of Container.propertyRegistry) {
      console.log(info)
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

    return ins;
  }
  private constructor() {}
}

function Provide(key?: string): ClassDecorator {
  return (Target) => {
    Container.set(key ?? Target.name, Target as unknown as ClassStruct);
    //不论是否传入 key，都使用 Class 作为 key 注册一份
    Container.set(Target, Target as unknown as ClassStruct);
  };
}

function Inject(key?: string): PropertyDecorator {
  return (target, propertyKey) => {
    console.log(Reflect.hasMetadata("design:type", target,propertyKey))
    Container.propertyRegistry.set(
      `${target.constructor.name}:${String(propertyKey)}`,
      key ?? Reflect.getMetadata('design:type', target, propertyKey)
    );
  };
}

@Provide()
class Driver {
  adapt(consumer: string) {
    console.log(`\n === 驱动已生效于 ${consumer}！===\n`);
  }
}

@Provide('Fuel')
class Fuel {
  fill(consumer: string) {
    console.log(`\n === 燃料已填充完毕 ${consumer}！===`);
  }
}

@Provide()
class Car {
  @Inject()
  driver!: Driver;

  @Inject()
  fule!: Fuel;

  run() {
    this.fule.fill('Car');
    this.driver.adapt('Car');
  }
}

@Provide()
class Bus {
  @Inject()
  driver!: Driver;

  @Inject('Fuel')
  fule!: Fuel;

  run() {
    this.fule.fill('Bus');
    this.driver.adapt('Bus');
  }
}

const car = Container.get(Car)!;
const bus = Container.get(Bus)!;

car.run();
bus.run();