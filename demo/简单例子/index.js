
Function.prototype.myBind = function (context = globalThis) {
  context.fn = this;
  const otherArgus = [...arguments].slice(1);
  const result = function () {
    const resultArgus = [...arguments];
    //new 对象调用
    if (this instanceof result) {
      fn.apply(this, otherArgus.concat(resultArgus));
    } else {
      fn.apply(context, otherArgus.concat(resultArgus));
    }
  };
  //绑定原型链
  result.prototype = Object.create(fn);
  //返回结果
  return result;
};

Function.prototype.mycall = function (context) {
  context.fn = this;
  const otherArgus = [...arguments].slice(1);
  context.fn(otherArgnus);
  const result = context.fn(otherArgus);
  delete context.fn;
  return result;
};

Function.prototype.mybind = function (context, arr) {
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

const PENDING="pending"
const RESOLVED="resolved"
const REJECTED="rejected"
function myPromise(fn) {
  const that = this;
  that.status =PENDING;
  that.value = null;
  that.reason = null;
  that.resolvedQuene = [];
  that.rejectQuene = [];
  function resolved(value) {
    if (that.status === PENDING) {
      that.value = value;
      that.status = RESOLVED;
      that.resolvedQuene.map((cb) => cb(value));
    }
  }
  function rejected(reason) {
    console.log(reason)
    if (that.status === PENDING) {
      that.reason = reason;
      that.status = REJECTED;
      that.rejectQuene.map((cb) => cb(reason));
    }
  }
  try {
    fn(resolved, rejected);
  } catch (err) {
    rejected(err);
  }
}
myPromise.prototype.then = function (onFullfilled, onRejected) {
  const that = this;
  if (that.status === PENDING) {
    that.resolvedQuene.push(onFullfilled);
    that.rejectQuene.push(onRejected);
  }
  if (that.status === RESOLVED) {
    onFullfilled(that.value);
  }
  if (that.status === REJECTED) {
    onRejected(that.reason);
  }
  return that;
};
const p = new myPromise((res, rej) => {
  setTimeout(() => {
    res(1000);
  }, 1000);
});

p.then((res) => {
  console.log("结果：" + res); //结果：1000
}).then((res) => {
  console.log("JSTina"); //JSTina
});