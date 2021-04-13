function myNew(func, ...args) {
  // 1. 判断方法体
  if (typeof func !== "function") {
    throw "第一个参数必须是方法体";
  }

  // 2. 创建新对象
  const obj = new Object();

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
function Person(name) {
  this.name = name;
  return function () {
    // 用来测试第 5 点
    console.log("返回引用数据类型");
  };
}
// 用来测试第 2 点和第 3 点
Person.prototype.sayName = function () {
  console.log(`My name is ${this.name}`);
};
// const me = myNew(Person, "jsliang"); // 用来测试第 4 点
// me.sayName(); // My name is jsliang
// console.log(me); // Person {name: 'jsliang'}
/**
 * 寄生组合继承
 */
function object(o){
  function Foo(){}
  Foo.prototype=o;
  return new Foo()
}

function inheritPrototype(subtype,supertype){
  var prototype=object(supertype.prototype)
  prototype.constructor=subtype
  subtype.prototype=prototype
}
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}
SuperType.prototype.sayName = function() {
  console.log(this.name);
}
function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}
inheritPrototype(SubType, SuperType);

SubType.prototype.sayAge = function() {
  console.log(this.age)
}
var obj=new SubType("Tina",18)
console.log(obj.name,obj.age)
console.log(obj.sayAge())
console.log(obj.sayName())
console.log(obj.colors)