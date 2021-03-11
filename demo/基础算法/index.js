//bubble排序
Array.prototype.bubblesSort = function () {
  //length:6
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - 1 - i; j++) {
      if (this[j] > this[j + 1]) {
        let temp = this[j + 1];
        this[j + 1] = this[j];
        this[j] = temp;
      }
    }
  }
  return this;
};
// const arr = [5,4,3,2,1,0,8];
// console.log(arr.bubblesSort())

/**
 * 选择排序
 * 最小值排第一位、第二小值排第二位。以此类推
 */
Array.prototype.selectionSort = function () {
  for (let i = 0; i < this.length; i++) {
    let indexMid = i;
    for (let j = i; j < this.length; j++) {
      if (this[j] < this[indexMid]) {
        console.log(j, this[j]);
        indexMid = j;
      }
    }
    const temp = this[i];
    this[i] = this[indexMid];
    this[indexMid] = temp;
  }
  return this;
};
// const arr = [5,2, 4, 3, 2, 1];
// console.log(arr.selectionSort());

/**
 * 插入排序
 * 从第二个数开始往前比、比它大就往后排
 */

Array.prototype.insertionSort = function () {
  var len = this.length;
  var preIndex, current;
  for (let i = 1; i < len; i++) {
    preIndex = i - 1;
    current = this[i];
    while (preIndex >= 0 && this[preIndex] > current) {
      this[preIndex + 1] = this[preIndex];
      preIndex--;
    }
    this[preIndex + 1] = current;
  }
  return this;
};
const arr = [5, 4, 3, 2, 1, 0];
console.log(arr.insertionSort());

/**
 * 快速排序
 *  分区然后排序、性能较好、可以项目中使用
 */
Array.prototype.quickSort = function () {
  const rec = function (arr) {
    // 递归做好跳出条件
    if (arr.length === 1) {
      return arr;
    }
    let mid = arr[0],
      left = [],
      right = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < mid) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...rec(left), mid, ...rec(right)];
  };
  return rec(this);
};
// const arr = [2,4,5,3,1];
// console.log(arr.quickSort());
