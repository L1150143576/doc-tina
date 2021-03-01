//bubble排序
Array.prototype.bubblesSort = function () {
  //length:6
  for (let i  = 0; i < this.length - 1; i++){ //1
    //  减i有效减少轮次
      for (let j = 0; j < this.length - 1 - i; j++){ //3
          if(this[j] > this[j + 1]){//2,0
              let temp = this[j];
              this[j] = this[j + 1];
              this[j + 1] = temp;
          }
      }
  }
  return this
};
// const arr = [5,4,3,2,1,0];
// console.log(arr.bubblesSort())

/**
 * 选择排序
 * 最小值排第一位、第二小值排第二位。以此类推
 */
Array.prototype.selectionSort = function () {
   for(let i=0;i<this.length-1;i++){
     for(let j=i;j<this.length;j++){
       if(this[j]<this[i]){
         const temp=this[i]
         this[i]=this[j]
         this[j]=temp
       }
     }
   }
   return this
};
// const arr = [5,2, 4, 3, 2, 1];
// arr.selectionSort();

/**
 * 插入排序
 * 从第二个数开始往前比、比它大就往后排
 */

Array.prototype.insertionSort = function () {
 var len=this.length
 var current,preIndex;
 for(let i=0;i<len;i++){
   preIndex=i-1
   current=arr[i]
   while(preIndex>=0&&this[preIndex]>current){
        this[preIndex+1]=this[preIndex]
        preIndex--
   }
   this[preIndex+1]=current
 }
  return this;
};
// const arr = [5,4,3,2,1,0];
// console.log(arr.insertionSort())

/**
 * 快速排序
 *  分区然后排序、性能较好、可以项目中使用
 */
Array.prototype.quickSort = function () {
  const rec = (arr) => {
    if(arr.length==1) return arr
    let left=[],
        right=[],
        mid=arr[0]
    for(let i=1;i<arr.length;i++){
      if(arr[i]<mid){
        left.push(arr[i])
      }else{
        right.push(arr[i])
      }
    }
    return [...rec(left),mid,...rec(right)]

  };
  return rec(this);
};
const arr = [2,4,5,3,1];
console.log(arr.quickSort());
