Function.prototype.myCall = function (context) {
  context.fn = this;
  const otherArgus = [...arguments].slice(1);
  const result = context.fn(otherArgus);
  delete context.fn;
  return result;
};

Function.prototype.myApply = function (context, arr) {
  context.fn = this;
  let result;
  if (arr) {
    result = context.fn(arr);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};

Function.prototype.myBind = function (context) {
  const fn = this;
  const otherArgus = [...arguments].slice(1);
  const result = function () {
    const resultArgus = [...arguments];
    //是否通过new对象
    if (this instanceof result) {
      fn.apply(this, otherArgus.concat(resultArgus));
    } else {
      fn.apply(context, otherArgus.concat(resultArgus));
    }
  };

  result.prototype = Object.create(fn.prototype);
  return result;
};

function sum() {
  var sum = 0,
    i = 1;
  while (i <= 100) {
    if (i % 3 == 0) sum += i;
    i++;
  }
  return sum;
}
// console.log(sum())
var value = 1;
var foo = {
  value: 2,
  bar: function () {
    return this.value;
  },
};
// var fn = foo.bar;
// console.log(fn);
// console.log(fn());
var value = 1;
var foo = {
  value: 1,
};

function bar() {
  console.log(this.value);
}
// bar.call(foo); //

function myNew(func, ...args) {
  // 1. 判断方法体
  if (typeof func !== "function") {
    throw "第一个参数必须是方法体";
  }

  // 2. 创建新对象
  const obj = {};

  // 3. 这个对象的 __proto__ 指向 func 这个类的原型对象
  // 即实例可以访问构造函数原型（constructor.prototype）所在原型链上的属性
  obj.__proto__ = Object.create(func.prototype);

  // 为了兼容 IE 可以让步骤 2 和 步骤 3 合并
  // const obj = Object.create(func.prototype);

  // 4. 通过 apply 绑定 this 执行并且获取运行后的结果
  let result = func.apply(obj, args);

  // 5. 如果构造函数返回的结果是引用数据类型，则返回运行后的结果
  // 否则返回新创建的 obj
  const isObject = typeof result === "object" && result !== null;
  const isFunction = typeof result === "function";
  return isObject || isFunction ? result : obj;
}

// 测试
function Person() {}
Person.prototype.name = "Tina";
Person.prototype.age = "18";
// 用来测试第 2 点和第 3 点
Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};
var proto = Object.create(Person.prototype);
function Superman() {}
Superman.prototype = proto;
Superman.prototype.power = "power";
Superman.prototype.sayPower = function () {
  console.log(`My power is ${this.power}`);
};
var superman = new Superman("你好");
console.log(superman.power);
console.log(superman.name);
console.log(superman.age);
console.log(superman.sayPower());
console.log(superman.sayName());
