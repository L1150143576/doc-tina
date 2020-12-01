/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  if (!root) return null;
  temp = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(temp);
  return root;
};
// 学校在拍年度纪念照时，一般要求学生按照 非递减 的高度顺序排列。

// 请你返回至少有多少个学生没有站在正确位置数量。该人数指的是：能让所有学生以 非递减 高度排列的必要移动人数。

//

// 示例：

// 输入：[1,1,4,2,1,3]
// 输出：3
// 解释：
// 高度为 4、3 和最后一个 1 的学生，没有站在正确的位置。
//

// 提示：

// 1 <= heights.length <= 100
// 1 <= heights[i] <= 100
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  var arr = heights.concat([]);
  var arr = arr.sort();
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] != heights[i]) count++;
  }
  return count;
};
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let temp = heights.slice(0);
  // temp.sort((a, b) => a - b);
  console.log(temp);
  let res = 0;
  for (let i = 0; i < heights.length; i++) {
    if (temp[i] !== heights[i]) {
      res++;
    }
  }
  return res;
};
// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// 说明: 叶子节点是指没有子节点的节点。

// 示例：
// 给定二叉树 [3,9,20,null,null,15,7]，

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回它的最大深度 3 。
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root == NULL)
    return 0;
  var leftDepth = maxDepth(root.left);
  var rightDepth = maxDepth(root.right);

  return leftDepth > rightDepth ? (leftDepth + 1) : (rightDepth + 1);

};
// 自除数 是指可以被它包含的每一位数除尽的数。

// 例如，128 是一个自除数，因为 128 % 1 == 0，128 % 2 == 0，128 % 8 == 0。

// 还有，自除数不允许包含 0 。

// 给定上边界和下边界数字，输出一个列表，列表的元素是边界（含边界）内所有的自除数。

// 示例 1：

// 输入： 
// 上边界left = 1, 下边界right = 22
// 输出： [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]
// 注意：

// 每个输入参数的边界满足 1 <= left <= right <= 10000。

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  var nums = [];
  for (var i = left; i <= right; i++) {
    if (i > 9) {
      if (!i.toString().includes("0")) {
        var att = i.toString().split("").map((item) => {
          return i % Number(item) == 0
        })
        if (!att.includes(false)) {
          nums.push(i)
        }
      }
    } else {
      nums.push(i)
    }
  }
  console.log(nums)
};
// 给定二叉搜索树（BST）的根节点和一个值。 你需要在BST中找到节点值等于给定值的节点。 返回以该节点为根的子树。
//  如果节点不存在，则返回 NULL。

// 例如，

// 给定二叉搜索树:

//         4
//        / \
//       2   7
//      / \
//     1   3

// 和值: 2
// 你应该返回如下子树:

//       2     
//      / \   
//     1   3
// 在上述示例中，如果要找的值是 5，但因为没有节点值为 5，我们应该返回 NULL
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  if (root == null) return null;
  if (root.val == val) return root;
  return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
};
// 给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。

//  

// 示例 1：

// 输入：[-4,-1,0,3,10]
// 输出：[0,1,9,16,100]
// 示例 2：

// 输入：[-7,-3,2,3,11]
// 输出：[4,9,9,49,121]
//  

// 提示：

// 1 <= A.length <= 10000
// -10000 <= A[i] <= 10000
// A 已按非递减顺序排序。
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function (A) {
  // return A.map((item) => {
  //   return Math.pow(item, 2);
  // }).sort((a, b) => a - b)
  var count = A.length;
  var result = [];
  var lastnumber = 0;
  var i = 0, j = count - 1;
  while (i <= j) {
    var leftnumber = Math.pow(A[i], 2);
    var rightnumber = Math.pow(A[j], 2);
    if (leftnumber > rightnumber) {
      result.unshift(leftnumber);
      i++;
    } else {
      result.unshift(rightnumber);
      j--;
    }
  }
  return result;
};

// unshift() 方法将把它的参数插入 arrayObject 的头部，并将已经存在的元素顺次地移到较高的下标处，以便留出空间。该方法的第一个参数将成为数组的新元素 0，如果还有第二个参数，它将成为新的元素 1，以此类推。

// 请注意，unshift() 方法不创建新的创建，而是直接修改原有的数组。


// 给定一个 N 叉树，返回其节点值的后序遍历。

// 例如，给定一个 3叉树 :







// 返回其后序遍历: [5,6,3,2,4,1].
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
  var res = [];
  post(root);
  return res;
  function post (root) {
    if (!root) return;
    if (root.children) {
      for (var i = 0; i < root.children.length; i++) {
        post(root.children[i]);
      }
    }
    res.push(root.val);

  }

};

// 给定一个 N 叉树，返回其节点值的前序遍历。

// 例如，给定一个 3叉树 :

// 返回其前序遍历: [1,3,5,6,2,4]。
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
  var res = [];
  post(root);
  return res;
  function post (root) {
    if (!root) return;
    res.push(root.val);
    if (root.children) {
      for (var i = 0; i < root.children.length; i++) {
        post(root.children[i]);
      }
    }
  }
};
// 给定只含 "I"（增大）或 "D"（减小）的字符串 S ，令 N = S.length。

// 返回 [0, 1, ..., N] 的任意排列 A 使得对于所有 i = 0, ..., N-1，都有：

// 如果 S[i] == "I"，那么 A[i] < A[i+1]
// 如果 S[i] == "D"，那么 A[i] > A[i+1]
//  

// 示例 1：

// 输出："IDID"
// 输出：[0,4,1,3,2]
// 示例 2：

// 输出："III"
// 输出：[0,1,2,3]
// 示例 3：

// 输出："DDI"
// 输出：[3,2,0,1]
//  

// 提示：

// 1 <= S.length <= 1000
// S 只包含字符 "I" 或 "D"。
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function (S) {
  // var arr = Array.from({length:S.length+1}, (v,k) => k);
  var start = 0;
  var end = S.length;
  var newArr = []
  var str = S.split('');
  for (var i = 0; i < S.length; i++) {
    if (str[i] == "I") {

      newArr.push(start)
      start++;

    } else {
      newArr.push(end)
      end--
    }
  }
  newArr.push(end)
  return newArr;

};
// 你和你的朋友，两个人一起玩 Nim 游戏：桌子上有一堆石头，每次你们轮流拿掉 1 - 3 块石头。 拿掉最后一块石头的人就是获胜者。你作为先手。

// 你们是聪明人，每一步都是最优解。 编写一个函数，来判断你是否可以在给定石头数量的情况下赢得游戏。

// 示例:

// 输入: 4
// 输出: false 
// 解释: 如果堆中有 4 块石头，那么你永远不会赢得比赛；
//      因为无论你拿走 1 块、2 块 还是 3 块石头，最后一块石头总是会被你的朋友拿走。
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return (n % 4 != 0)
};
// 写一个 RecentCounter 类来计算最近的请求。

// 它只有一个方法：ping(int t)，其中 t 代表以毫秒为单位的某个时间。

// 返回从 3000 毫秒前到现在的 ping 数。

// 任何处于 [t - 3000, t] 时间范围之内的 ping 都将会被计算在内，包括当前（指 t 时刻）的 ping。

// 保证每次对 ping 的调用都使用比之前更大的 t 值。

//  

// 示例：

// 输入：inputs = ["RecentCounter","ping","ping","ping","ping"], inputs = [[],[1],[100],[3001],[3002]]
// 输出：[null,1,2,3,3]
//  

// 提示：

// 每个测试用例最多调用 10000 次 ping。
// 每个测试用例会使用严格递增的 t 值来调用 ping。
// 每次调用 ping 都有 1 <= t <= 10^9。
var RecentCounter = function () {
  let quene = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
  this.quene.push(t)
  while (this.quene[0] < t - 3000) {
    this.quene.shift();
  }
  return this.quene.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */

// 爱丽丝和鲍勃一起玩游戏，他们轮流行动。爱丽丝先手开局。

// 最初，黑板上有一个数字 N 。在每个玩家的回合，玩家需要执行以下操作：

// 选出任一 x，满足 0 < x < N 且 N % x == 0 。
// 用 N - x 替换黑板上的数字 N 。
// 如果玩家无法执行这些操作，就会输掉游戏。

// 只有在爱丽丝在游戏中取得胜利时才返回 True，否则返回 false。假设两个玩家都以最佳状态参与游戏。

//  

// 示例 1：

// 输入：2
// 输出：true
// 解释：爱丽丝选择 1，鲍勃无法进行操作。
// 示例 2：

// 输入：3
// 输出：false
// 解释：爱丽丝选择 1，鲍勃也选择 1，然后爱丽丝无法进行操作。
//  

// 提示：

// 1 <= N <= 1000

/**
 * @param {number} N
 * @return {boolean}
 */
var divisorGame = function (N) {

};
// 我们把符合下列属性的数组 A 称作山脉：

// A.length >= 3
// 存在 0 < i < A.length - 1 使得A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1]
// 给定一个确定为山脉的数组，返回任何满足 A[0] < A[1] < ... A[i-1] < A[i] > A[i+1] > ... > A[A.length - 1] 的 i 的值。

//  

// 示例 1：

// 输入：[0,1,0]
// 输出：1
// 示例 2：

// 输入：[0,2,1,0]
// 输出：1
//  

// 提示：

// 3 <= A.length <= 10000
// 0 <= A[i] <= 10^6
// A 是如上定义的山脉
//  

/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function (A) {
  /**
   * 解法1
   */
  // const [...arr] = A;
  // var index = A.indexOf(arr.sort((a, b) => a - b)[0])
  // return index;

  /**
   * 解法2
   */
  // let index = 0;
  // while (A[index] < A[index + 1]) {
  //   index++;
  // }
  // return index;

  /**
   * 解法3
   */
  let start = 0, end = A.length - 1;
  while (A[start] < A[end]) {
    let mid = (start + (end - start)) / 2;
    if (A[mid] < A[mid + 1]) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }
};
// 给定长度为 2n 的数组, 你的任务是将这些数分成 n 对, 例如 (a1, b1), (a2, b2), ..., (an, bn) ，使得从1 到 n 的 min(ai, bi) 总和最大。

// 示例 1:

// 输入: [1,4,3,2]

// 输出: 4
// 解释: n 等于 2, 最大总和为 4 = min(1, 2) + min(3, 4).
// 提示:

// n 是正整数,范围在 [1, 10000].
// 数组中的元素范围在 [-10000, 10000].
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  var arr = nums.concat().sort((a, b) => a - b)
  console.log(arr)
  var index = 0;
  var sum = 0;
  while (index % 2) {
    if (index < 4) {
      console.log(arr.length)
      sum += arr[index]
      index++;
    }

  }
  return sum;
};
// 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

// 示例 1:

// 输入: "Let's take LeetCode contest"
// 输出: "s'teL ekat edoCteeL tsetnoc" 
// 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  //第一种解法
  // var arr= s.split(" ");
  // var str="";
  // for(var i=0;i<arr.length;i++){
  //   str+=arr[i].split("").reverse().join("");
  //   i<arr.length-1?str+=" ":""
  // }
  // return str;

  //第二种解法
  // return s.split("").reverse().join('').split(" ").reverse().join(" ")
  //第三种解法
  for (let i = 0; i < s.length / 2; i++) {
    [s[i], s[s.length - 1 - i]] = [s[s.length - 1 - i], s[i]]
  }

  return s;

};

// 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

// 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

// 示例:

// 给定有序数组: [-10,-3,0,5,9],

// 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

//       0
//      / \
//    -3   9
//    /   /
//  -10  5
//  
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length == 0) return null;
  let cen = Math.floor(nums.length / 2)
  let node = new TreeNode(nums[cen])
  node.left = sortedArrayToBST(nums.slice(0, cen))
  node.right = sortedArrayToBST(nums.slice(cen + 1))
  return node;
};


// 给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

// 你可以返回满足此条件的任何数组作为答案。

//  

// 示例：

// 输入：[3,1,2,4]
// 输出：[2,4,3,1]
// 输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
//  

// 提示：

// 1 <= A.length <= 5000
// 0 <= A[i] <= 5000
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function (A) {
  var arr1 = new Array(), arr2 = new Array();
  for (var i = 0; i < A.length; i++) {
    if (A[i] % 2 == 0) {
      arr1.push(A[i])
    } else {
      arr2.push(A[i])
    }
  }
  return arr1.concat(arr2)
};

// 给定一个正整数，输出它的补数。补数是对该数的二进制表示取反。

// 注意:

// 给定的整数保证在32位带符号整数的范围内。
// 你可以假定二进制数不包含前导零位。
// 示例 1:

// 输入: 5
// 输出: 2
// 解释: 5的二进制表示为101（没有前导零位），其补数为010。所以你需要输出2。
// 示例 2:

// 输入: 1
// 输出: 0
// 解释: 1的二进制表示为1（没有前导零位），其补数为0。所以你需要输出0。
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  //   var arr=num.toString(2).split("");
  // let  newArr=arr.map((item)=>{
  //   result=(item==1)?'0':'1'
  //   return result;
  // })

  // return parseInt(newArr.join(""),2)
  var maxIndex = num.toString(2).split("").length - 1;
  var res = 1;
  for (var i = 0; i < maxIndex; i++) {
    res *= 2;
  }
  var sum = res * 2 - 1;
  return sum ^ num;

};

// SQL架构
// Employee 表包含所有员工，他们的经理也属于员工。每个员工都有一个 Id，此外还有一列对应员工的经理的 Id。

// +----+-------+--------+-----------+
// | Id | Name  | Salary | ManagerId |
// +----+-------+--------+-----------+
// | 1  | Joe   | 70000  | 3         |
// | 2  | Henry | 80000  | 4         |
// | 3  | Sam   | 60000  | NULL      |
// | 4  | Max   | 90000  | NULL      |
// +----+-------+--------+-----------+
// 给定 Employee 表，编写一个 SQL 查询，该查询可以获取收入超过他们经理的员工的姓名。在上面的表格中，Joe 是唯一一个收入超过他的经理的员工。

// +----------+
// | Employee |
// +----------+
// | Joe      |
// +----------+


// 给定一个 N 叉树，找到其最大深度。

// 最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

// 例如，给定一个 3叉树 :

//  



//  

// 我们应返回其最大深度，3。

// 说明:

// 树的深度不会超过 1000。
// 树的节点总不会超过 5000。


/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/**
 * @param {Node} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0                // 如果没有节点, 直接返回0
  let num = 0                       // 记录深度
  if (root.children) {
    root.children.forEach(item => {   // 遍历有几个节点
      let max = maxDepth(item)      // 递归调用
      num = Math.max(max, num)      // 对比当前和之前得到的 深度, 保留大的
    })
  }
  return num + 1


  if (!root) return 0;
  let depth = 0;
  if (root.children) {
    for (var i = 0; i < root.children.length; i++) {
      let num = maxDepth(root.children[i])
      depth = Math.max(num, depth)
    }
  }
  return depth + 1;
};


// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:

// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]
// 示例 2:

// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]
// 说明:

// 输出结果中的每个元素一定是唯一的。
// 我们可以不考虑输出结果的顺序。

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  // var arr=new Set();
  // var arr1=new Set();
  // nums1.map((item)=>{
  //   return arr.add(item)
  // })
  // nums2.map((e)=>{
  //   return arr1.add(e)
  // })
  // let length=arr.size>arr1.size?arr.size:arr1.size

  // let newArr=new Array();

  //    if(arr.length>arr1.length){
  //     arr.forEach((item)=>{
  //       nums2.includes(item)?newArr.push(item):""
  //     })

  //    }else{
  //       arr1.forEach((item)=>{
  //       nums1.includes(item)?newArr.push(item):""
  //     })
  //    }

  return [...new Set(nums1)].filter((v) => nums2.includes(v))
};

// 给出一个函数  f(x, y) 和一个目标结果 z，请你计算方程 f(x,y) == z 所有可能的正整数 数对 x 和 y。

// 给定函数是严格单调的，也就是说：

// f(x, y) < f(x + 1, y)
// f(x, y) < f(x, y + 1)
// 函数接口定义如下：

// interface CustomFunction {
// public:
//   // Returns positive integer f(x, y) for any given positive integer x and y.
//   int f(int x, int y);
// };
// 如果你想自定义测试，你可以输入整数 function_id 和一个目标结果 z 作为输入，其中 function_id 表示一个隐藏函数列表中的一个函数编号，题目只会告诉你列表中的 2 个函数。  

// 你可以将满足条件的 结果数对 按任意顺序返回。

//  

// 示例 1：

// 输入：function_id = 1, z = 5
// 输出：[[1,4],[2,3],[3,2],[4,1]]
// 解释：function_id = 1 表示 f(x, y) = x + y
// 示例 2：

// 输入：function_id = 2, z = 5
// 输出：[[1,5],[5,1]]
// 解释：function_id = 2 表示 f(x, y) = x * y
//  

// 提示：

// 1 <= function_id <= 9
// 1 <= z <= 100
// 题目保证 f(x, y) == z 的解处于 1 <= x, y <= 1000 的范围内。
// 在 1 <= x, y <= 1000 的前提下，题目保证 f(x, y) 是一个 32 位有符号整数。

/**
 * // This is the CustomFunction's API interface.
 * // You should not implement it, or speculate about its implementation
 * function CustomFunction() {
 *
 *     @param {integer, integer} x, y
 *     @return {integer}
 *     this.f = function(x, y) {
 *         ...
 *     };
 *
 * };
 */
/**
 * @param {CustomFunction} customfunction
 * @param {integer} z
 * @return {integer[][]}
 */
var findSolution = function (customfunction, z) {
  let list = []
  for (let i = 1; i <= z; i++) {
    for (let j = 1; j <= z; j++) {
      if (customfunction.f(i, j) === z) {
        list.push([i, j])
      }
    }
  }
  return list；
};

// 给定一个整数数组 A，对于每个整数 A[i]，我们可以选择任意 x 满足 -K <= x <= K，并将 x 加到 A[i] 中。

// 在此过程之后，我们得到一些数组 B。

// 返回 B 的最大值和 B 的最小值之间可能存在的最小差值。

//  

// 示例 1：

// 输入：A = [1], K = 0
// 输出：0
// 解释：B = [1]
// 示例 2：

// 输入：A = [0,10], K = 2
// 输出：6
// 解释：B = [2,8]
// 示例 3：

// 输入：A = [1,3,6], K = 3
// 输出：0
// 解释：B = [3,3,3] 或 B = [4,4,4]
//  
//[2 7 2] 1
//[3,1,10] 4
// 提示：

// 1 <= A.length <= 10000
// 0 <= A[i] <= 10000
// 0 <= K <= 10000

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function (A, K) {
  //解法1
  // var newArr=[]
  // A.sort((a,b)=>a-b)
  // var base=A[0]+K
  // for(var i=0;i<A.length;i++){
  //   if(i==0){
  //      newArr.push(A[i]+K)
  //   }else if(A[i]>base){
  //     if(A[i]-base>K){
  //      console.log(base)
  //        newArr.push(A[i]-K)
  //     }else{
  //        newArr.push(K)
  //     }
  //   }else{
  //         newArr.push(base)
  //      }
  // }
  // return newArr;

  //解法2
  //    A.sort((a,b)=>a-b);
  // var len=A.length;
  // var base=A[0]+K
  // if(len>1){
  //  if(A[len-1]-base>K){
  //       return A[len-1]-base-K
  //     }else{
  //       return 0;
  //     }
  //  }else{
  //       return A[len-1]-base
  //    }

  //解法3
  let max = Math.max.apply(null, A)
  let min = Math.min.apply(null, A)
  if ((max - K) < (min + K)) {
    return 0
  } else {
    return max - min - 2 * K
  }

};

// 编写一个遍历游程编码序列的迭代器。

// 迭代器由 RLEIterator(int[] A) 初始化，其中 A 是某个序列的游程编码。更具体地，对于所有偶数 i，A[i] 告诉我们在序列中重复非负整数值 A[i + 1] 的次数。

// 迭代器支持一个函数：next(int n)，它耗尽接下来的  n 个元素（n >= 1）并返回以这种方式耗去的最后一个元素。如果没有剩余的元素可供耗尽，则  next 返回 -1 。

// 例如，我们以 A = [3,8,0,9,2,5] 开始，这是序列 [8,8,8,5,5] 的游程编码。这是因为该序列可以读作 “三个八，零个九，两个五”。

//  

// 示例：

// 输入：["RLEIterator","next","next","next","next"], [[[3,8,0,9,2,5]],[2],[1],[1],[2]]
// 输出：[null,8,8,5,-1]
// 解释：
// RLEIterator 由 RLEIterator([3,8,0,9,2,5]) 初始化。
// 这映射到序列 [8,8,8,5,5]。
// 然后调用 RLEIterator.next 4次。

// .next(2) 耗去序列的 2 个项，返回 8。现在剩下的序列是 [8, 5, 5]。

// .next(1) 耗去序列的 1 个项，返回 8。现在剩下的序列是 [5, 5]。

// .next(1) 耗去序列的 1 个项，返回 5。现在剩下的序列是 [5]。

// .next(2) 耗去序列的 2 个项，返回 -1。 这是由于第一个被耗去的项是 5，
// 但第二个项并不存在。由于最后一个要耗去的项不存在，我们返回 -1。
//  

// 提示：

// 0 <= A.length <= 1000
// A.length 是偶数。
// 0 <= A[i] <= 10^9
/**
 * @param {number[]} A
 */
var RLEIterator = function (A) {
  this.list = A;//list:[ 3, 8, 0, 9, 2, 5 ]
};

/** 
 * @param {number} n
 * @return {number}
 */
RLEIterator.prototype.next = function (n) {
  var arr = []
  while (this.list.length && n > this.list[0]) {
    n -= this.list[0]
    arr = this.list.splice(0, 2)
  }
  if (n <= this.list[0]) {
    this.list[0] = this.list[0] - n
    return this.list[1]
  }
  return -1
};

/** 
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */

//  在调用 next() 函数时，我们不会真正删除剩余的元素（或者说改变数组 A 的值），而是维护两个变量 i 和 q，其中 i 表示迭代器当前指向的是元素 A[i + 1]，q 表示它已经被删除的次数，q 的值不会大于 A[i]。

// 例如，当数组 A 为 [1,2,3,4] 时，它表示的序列为 [2,4,4,4]。当 i 和 q 的值分别为 0 和 0 时，表示没有任何元素被删除；当 i 和 q 的值分别为 0 和 1 时，表示元素 A[0 + 1] = 2 被删除了 1 次；当 i 和 q 的值分别为 2 和 1 时，表示元素 A[2 + 1] = 4 被删除了 1 次，且之前的元素被全部删除。

// 算法

// 如果我们调用 next(n)，即删除 n 个元素，那么对于当前的元素 A[i + 1]，我们还可以删除的次数为 D = A[i] - q。

// 如果 n > D，那么我们会删除所有的 A[i + 1]，并迭代到下一个元素，即 n -= D; i += 2; q = 0。

// 如果 n <= D，那么我们删除的最后一个元素就为 A[i + 1]，即 q += D; return A[i + 1]。


//打印杨辉三角
var arrSan = function (n) {
  var row = n;
  var k = 2;
  var temp = [1];

  for (let i = 1; i <= row; i++) {
    var arr = new Array();
    for (let j = 0; j < i; j++) {
      if (j == 0 || j == i) {
        arr.push(1)
      } else {
        arr.push(temp[j - 1] + temp[j])
        console.log(temp)
      }
      temp = arr;

    }
  }
}
arrSan(8)


// 给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素最多出现两次，返回移除后数组的新长度。

// 不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

// 示例 1:

// 给定 nums = [1,1,1,2,2,3],

// 函数应返回新长度 length = 5, 并且原数组的前五个元素被修改为 1, 1, 2, 2, 3 。

// 你不需要考虑数组中超出新长度后面的元素。
// 示例 2:

// 给定 nums = [0,0,1,1,1,1,2,3,3],   

// 函数应返回新长度 length = 7, 并且原数组的前五个元素被修改为 0, 0, 1, 1, 2, 3, 3 。

// 你不需要考虑数组中超出新长度后面的元素。
// 说明:

// 为什么返回数值是整数，但输出的答案是数组呢?

// 请注意，输入数组是以“引用”方式传递的，这意味着在函数里修改输入数组对于调用者是可见的。

// 你可以想象内部操作如下:

// // nums 是以“引用”方式传递的。也就是说，不对实参做任何拷贝
// int len = removeDuplicates(nums);

// // 在函数里修改输入数组对于调用者是可见的。
// // 根据你的函数返回的长度, 它会打印出数组中该长度范围内的所有元素。
// for (int i = 0; i < len; i++) {
//     print(nums[i]);
// }

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  var i = 0;
  while (i < nums.length) {
    if (nums[i] == nums[i - 2]) {
      nums.splice(i, 1);
    } else {
      i++
    }
  }
  return nums;
};


// N  辆车沿着一条车道驶向位于 target 英里之外的共同目的地。

// 每辆车 i 以恒定的速度 speed[i] （英里/小时），从初始位置 position[i] （英里） 沿车道驶向目的地。

// 一辆车永远不会超过前面的另一辆车，但它可以追上去，并与前车以相同的速度紧接着行驶。

// 此时，我们会忽略这两辆车之间的距离，也就是说，它们被假定处于相同的位置。

// 车队 是一些由行驶在相同位置、具有相同速度的车组成的非空集合。注意，一辆车也可以是一个车队。

// 即便一辆车在目的地才赶上了一个车队，它们仍然会被视作是同一个车队。

//  

// 会有多少车队到达目的地?

//  

// 示例：

// 输入：target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
// 输出：3
// 解释：
// 从 10 和 8 开始的车会组成一个车队，它们在 12 处相遇。
// 从 0 处开始的车无法追上其它车，所以它自己就是一个车队。
// 从 5 和 3 开始的车会组成一个车队，它们在 6 处相遇。
// 请注意，在到达目的地之前没有其它车会遇到这些车队，所以答案是 3。

// 提示：

// 0 <= N <= 10 ^ 422222576y

// 0 < target <= 10 ^ 6
// 0 < speed[i] <= 10 ^ 6
// 0 <= position[i] < target
// 所有车的初始位置各不相同。
/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  var count = 0;
  var q = 0
  var arr = JSON.parse(JSON.stringify(position)).sort((a, b) => b - a);
  if (arr.length > 1) {
    for (var i = 0; i < position.length; i++) {

      if (i < position.length - 1) {
        var index = position.indexOf(arr[i]);
        var index1 = position.indexOf(arr[i + 1])
        if ((target - position[index]) / speed[index] >= (target - position[index1]) / speed[index1] && q= 0) {
          count++
        }else if ((target - position[index]) / speed[index] < (target - position[index1]) / speed[index1]) {
          q = 0
        }
      } else {
        var index = position.indexOf(arr[i]);
        var index1 = position.indexOf(arr[i - 1])

        if ((target - position[index]) / speed[index] >= (target - position[index1]) / speed[index1] && q= 0) {
          count++
        }


      }

    }
    return count
  } else if (arr.length == 1) {
    return 1;
  }

  return 0;

};

// 给定一个用字符串表示的整数的嵌套列表，实现一个解析它的语法分析器。

// 列表中的每个元素只可能是整数或整数嵌套列表

// 提示：你可以假定这些字符串都是格式良好的：

// 字符串非空
// 字符串不包含空格
// 字符串只包含数字0-9, [, - ,, ]
//  

// 示例 1：

// 给定 s = "324",

// 你应该返回一个 NestedInteger 对象，其中只包含整数值 324。
//  

// 示例 2：

// 给定 s = "[123,[456,[789]]]",

// 返回一个 NestedInteger 对象包含一个有两个元素的嵌套列表：

// 1. 一个 integer 包含值 123
// 2. 一个包含两个元素的嵌套列表：
//     i.  一个 integer 包含值 456
//     ii. 一个包含一个元素的嵌套列表
//          a. 一个 integer 包含值 789
//          
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {string} s
 * @return {NestedInteger}
 */
var deserialize = function (s) {
  let ws = [], chars = [], cache = [];
  s = s + "#";
  for (let i = 0; i < s.length; ++i) {
    if (chars.length && isNaN(s[i])) {
      let num_node = new NestedInteger();
      num_node.setInteger(chars.join("") | 0);
      ws.push(num_node);
      chars.length = 0;
    }
    switch (s[i]) {
      case "#":
      case ",": break;
      case "[": ws.push("$"); break;
      case "]":
        let e, list_node = new NestedInteger();
        while ((e = ws.pop()) != "$") cache.push(e);
        while (cache.length) list_node.add(cache.pop());
        ws.push(list_node);
        break;
      default:
        chars.push(s[i]);
        break;
    }
  }
  return ws[0];
};

// 如果出现下述两种情况，交易 可能无效：

// 交易金额超过 ¥1000
// 或者，它和另一个城市中同名的另一笔交易相隔不超过 60 分钟（包含 60 分钟整）
// 每个交易字符串 transactions[i] 由一些用逗号分隔的值组成，这些值分别表示交易的名称，时间（以分钟计），金额以及城市。

// 给你一份交易清单 transactions，返回可能无效的交易列表。你可以按任何顺序返回答案。

//  

// 示例 1：

// 输入：transactions = ["alice,20,800,mtv","alice,50,100,beijing"]
// 输出：["alice,20,800,mtv","alice,50,100,beijing"]
// 解释：第一笔交易是无效的，因为第二笔交易和它间隔不超过 60 分钟、名称相同且发生在不同的城市。同样，第二笔交易也是无效的。
// 示例 2：

// 输入：transactions = ["alice,20,800,mtv","alice,50,1200,mtv"]
// 输出：["alice,50,1200,mtv"]
// 示例 3：

// 输入：transactions = ["alice,20,800,mtv","bob,50,1200,mtv"]
// 输出：["bob,50,1200,mtv"]
//  

// 提示：

// transactions.length <= 1000
// 每笔交易 transactions[i] 按 "{name},{time},{amount},{city}" 的格式进行记录
// 每个交易名称 {name} 和城市 {city} 都由小写英文字母组成，长度在 1 到 10 之间
// 每个交易时间 {time} 由一些数字组成，表示一个 0 到 1000 之间的整数
// 每笔交易金额 {amount} 由一些数字组成，表示一个 0 到 2000 之间的整数
/**
 * @param {string[]} transactions
 * @return {string[]}
 */

var invalidTransactions = function (transactions) {
  var indexs = []
  var arr = []
  transactions.sort();
  var str = transactions.join(",").split(",")
  for (let i = 0; i < transactions.length; i++) {
    var temp = transactions[i].split(',')
    if (temp[2] > 1000) indexs.push(transactions[i])
    arr.push(temp)
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i][0] == arr[j][0] && Math.abs(arr[i][1] - arr[j][1]) <= 60 && arr[i][3] != arr[j][3]) {
        indexs.push(transactions[j])
      }
    }
  }
  var newArr = []
  new Set(indexs).forEach((item) => newArr.push(item))
  return newArr
};


// 给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

// 找到所有在 [1, n] 范围之间没有出现在数组中的数字。

// 您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。

// 示例:

// 输入:
// [4,3,2,7,8,2,3,1]


// 输出:
// [5,6]
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  // var arr=[]
  // for(let i=1;i<=nums.length;i++){
  //     if(nums.indexOf(i)==-1){
  //        arr.push(i)
  //     }
  // }
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    nums[Math.abs(nums[i]) - 1] = -Math.abs(nums[Math.abs(nums[i]) - 1])
    console.log(nums[Math.abs(nums[i]) - 1])
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      arr.push(i + 1);
    }
  }
  return arr
};

// 给你一个字符串 s ，每一次操作你都可以在字符串的任意位置插入任意字符。

// 请你返回让 s 成为回文串的 最少操作次数 。

// 「回文串」是正读和反读都相同的字符串。

//  

// 示例 1：

// 输入：s = "zzazz"
// 输出：0
// 解释：字符串 "zzazz" 已经是回文串了，所以不需要做任何插入操作。
// 示例 2：

// 输入：s = "mbadm"
// 输出：2
// 解释：字符串可变为 "mbdadbm" 或者 "mdbabdm" 。
// 示例 3：

// 输入：s = "leetcode"
// 输出：5
// 解释：插入 5 个字符后字符串变为 "leetcodocteel" 。
// 示例 4：

// 输入：s = "g"
// 输出：0
// 示例 5：

// 输入：s = "no"
// 输出：1
//  

// 提示：

// 1 <= s.length <= 500
// s 中所有字符都是小写字母。


/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {

  var str1 = s;
  str2 = s.split('').reverse().join('');
  var len = str2.length
  var dp = [];
  for (var i = 0; i <= len; i++) {
    dp[i] = [];
    for (var j = 0; j <= len; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
        continue;
      }
      if (str1[i - 1] == str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return s.length - dp[len][len];
}


//精简版
function minInsertions (string s) {
  let N = s.length;
  dp[] //默认都初始化为0，逐个计算，不会错误使用默认值
  for (int d = 1; d < N; ++d) { //步长从1开始
    for (int i = 0, j = i + d; j < N; ++i, ++j) {
      dp[i][j] = min(dp[i + 1][j], dp[i][j - 1]) + 1;
      if (s[i] == s[j]) {
        dp[i][j] = d == 1 ? 0 : dp[i + 1][j - 1]; //这个是子集，一定会比另两个长的短
      }
      //printf("dp[%d][%d]=%d\t", i, j, dp[i][j]);
    }
    //cout << endl;
  }
  return dp[0][N - 1];
}

function min (a, b) {
  return a <= b ? a : b;
}

var minInsertions = function (s) {
  return dp(s, 0, s.length - 1);
};

function dp (str, i, j) {
  if (i >= j) {
    return 0;
  }
  if (str[i] == str[j]) {
    return dp(str, i + 1, j - 1);
  } else {
    return min(dp(str, i, j - 1), dp(str, i + 1, j)) + 1
  }
}

function min (a, b) {
  return a <= b ? a : b;
}



// 数轴上放置了一些筹码，每个筹码的位置存在数组 chips 当中。

// 你可以对 任何筹码 执行下面两种操作之一（不限操作次数，0 次也可以）：

// 将第 i 个筹码向左或者右移动 2 个单位，代价为 0。
// 将第 i 个筹码向左或者右移动 1 个单位，代价为 1。
// 最开始的时候，同一位置上也可能放着两个或者更多的筹码。

// 返回将所有筹码移动到同一位置（任意位置）上所需要的最小代价。

//  

// 示例 1：

// 输入：chips = [1,2,3]
// 输出：1
// 解释：第二个筹码移动到位置三的代价是 1，第一个筹码移动到位置三的代价是 0，总代价为 1。
// 示例 2：

// 输入：chips = [2,2,2,3,3]
// 输出：2
// 解释：第四和第五个筹码移动到位置二的代价都是 1，所以最小总代价为 2。
//  

// 提示：

// 1 <= chips.length <= 100
// 1 <= chips[i] <= 10^9

/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function (chips) {
  var odd = 0, even = 0
  for (let i = 0; i < chips.length; i++) {
    if (chips[i] % 2 == 0) {
      even++
    } else {
      odd++
    }
  }
  if (odd > even)
    return even;
  return odd;
};


// 给定一个包括 n 个整数的数组 nums 和 一个目标值 target。找出 nums 中的三个整数，
// 使得它们的和与 target 最接近。返回这三个数的和。假定每组输入只存在唯一答案。

// 例如，给定数组 nums = [-1，2，1，-4], 和 target = 1.

// 与 target 最接近的三个数的和为 2. (-1 + 2 + 1 = 2).

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => (a - b))
  var ans = nums[0] + nums[1] + nums[2]
  for (let i = 0; i < nums.length; ++) {

    let start = i + 1;
    end = nums.length - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (Math.abs(target - sum) < Math.abs(target - ans)) {
        ans = sum;
        if (sum > target) {
          end--
        } else if (sum < target) {
          start++
        } else {
          return ans
        }
      }
    }
  }
  return ans;
};


// 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。

// 说明：

// 拆分时可以重复使用字典中的单词。
// 你可以假设字典中没有重复的单词。
// 示例 1：

// 输入: s = "leetcode", wordDict = ["leet", "code"]
// 输出: true
// 解释: 返回 true 因为 "leetcode" 可以被拆分成 "leet code"。
// 示例 2：

// 输入: s = "applepenapple", wordDict = ["apple", "pen"]
// 输出: true
// 解释: 返回 true 因为 "applepenapple" 可以被拆分成 "apple pen apple"。
//      注意你可以重复使用字典中的单词。
// 示例 3：

// 输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
// 输出: false

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

  var map = {};
  var maxWordLength = 0;
  var dp = [];
  var flag = true;
  wordDict.forEach(word => {
    map[word] = true;
    maxWordLength = Math.max(maxWordLength, word.length);
  });
  for (var i = 0; i < s.length; i++) {
    dp[i] = false;
    var j = i - 1;
    if (i < maxWordLength && map[s.substr(0, i + 1)]) {
      dp[i] = true;
      flag = false;
      continue;
    }
    if (flag && i >= maxWordLength) {
      return false;
    }
    while (i - j <= maxWordLength) {
      if (dp[j] && map[s.substr(j + 1, i - j)]) {
        dp[i] = true;
        break;
      }
      j--;
    }
  }
  return dp[s.length - 1];

};

/**
* 官方题解1
*
**/

// 方法 1：暴力
// 算法

// 最简单的实现方法是用递归和回溯。为了找到解，我们可以检查字典单词中每一个单词的可能前缀，如果在字典中出现过，那么去掉这个前缀后剩余部分回归调用。
// 同时，如果某次函数调用中发现整个字符串都已经被拆分且在字典中出现过了，函数就返回 true 。

// public class Solution {
//     public boolean wordBreak(String s, List<String> wordDict) {
//         return word_Break(s, new HashSet(wordDict), 0);
//     }
//     public boolean word_Break(String s, Set<String> wordDict, int start) {
//         if (start == s.length()) {
//             return true;
//         }
//         for (int end = start + 1; end <= s.length(); end++) {
//             if (wordDict.contains(s.substring(start, end)) && word_Break(s, wordDict, end)) {
//                 return true;
//             }
//         }
//         return false;
//     }
// }
// 复杂度分析

// 时间复杂度：O(n^n)O(n 
// n
//  ) 。考虑最坏情况 ss = \text{aaaaaaa}aaaaaaa 。每一个前缀都在字典中，此时回溯树的复杂度会达到 n^nn 
// n
//   。
// 空间复杂度：O(n)O(n) 。回溯树的深度最深达到 nn 。


// 方法 2：记忆化回溯
// 算法

// 在先前的方法中，我们看到许多函数调用都是冗余的，也就是我们会对相同的字符串调用多次回溯函数。为了避免这种情况，我们可以使用记忆化的方法，
// 其中一个 memomemo 数组会被用来保存子问题的结果。每当访问到已经访问过的后缀串，直接用 memomemo 数组中的值返回而不需要继续调用函数。

// 通过记忆化，许多冗余的子问题可以极大被优化，回溯树得到了剪枝，因此极大减小了时间复杂度。

// Java
// public class Solution {
//     public boolean wordBreak(String s, List<String> wordDict) {
//         return word_Break(s, new HashSet(wordDict), 0, new Boolean[s.length()]);
//     }
//     public boolean word_Break(String s, Set<String> wordDict, int start, Boolean[] memo) {
//         if (start == s.length()) {
//             return true;
//         }
//         if (memo[start] != null) {
//             return memo[start];
//         }
//         for (int end = start + 1; end <= s.length(); end++) {
//             if (wordDict.contains(s.substring(start, end)) && word_Break(s, wordDict, end, memo)) {
//                 return memo[start] = true;
//             }
//         }
//         return memo[start] = false;
//     }
// }
// 方法 4：使用动态规划
// 算法

// 这个方法的想法是对于给定的字符串（ss）可以被拆分成子问题 s1s1 和 s2s2 。如果这些子问题都可以独立地被拆分成符合要求的子问题，那么整个问题 ss 也可以满足。也就是，如果 "\text{catsanddog}catsanddog" 可以拆分成两个子字符串 "\text{catsand}catsand" 和 "\text{dog}dog" 。子问题 "\text{catsand}catsand" 可以进一步拆分成 "\text{cats}cats" 和 "\text{and}and" ，这两个独立的部分都是字典的一部分，所以 "\text{catsand}catsand" 满足题意条件，再往前， "\text{catsand}catsand" 和 "\text{dog}dog" 也分别满足条件，所以整个字符串 "\text{catsanddog}catsanddog" 也满足条件。

// 现在，我们考虑 \text{dp}dp 数组求解的过程。我们使用 n+1n+1 大小数组的 \text{dp}dp ，其中 nn 是给定字符串的长度。我们也使用 2 个下标指针 ii 和 jj ，其中 ii 是当前字符串从头开始的子字符串（s's 
// ′
//  ）的长度， jj 是当前子字符串（s's 
// ′
//  ）的拆分位置，拆分成 s'(0,j)s 
// ′
//  (0,j) 和 s'(j+1,i)s 
// ′
//  (j+1,i) 。

// 为了求出 \text{dp}dp 数组，我们初始化 \text{dp}[0]dp[0] 为 \text{true}true ，这是因为空字符串总是字典的一部分。 \text{dp}dp 数组剩余的元素都初始化为 \text{false}false 。

// 我们用下标 ii 来考虑所有从当前字符串开始的可能的子字符串。对于每一个子字符串，我们通过下标 jj 将它拆分成 s1's1 
// ′
//   和 s2's2 
// ′
//   （注意 ii 现在指向 s2's2 
// ′
//   的结尾）。为了将 \text{dp}[i]dp[i] 数组求出来，我们依次检查每个 \text{dp}[j]dp[j] 是否为 \text{true}true ，也就是子字符串 s1's1 
// ′
//   是否满足题目要求。如果满足，我们接下来检查 s2's2 
// ′
//   是否在字典中。如果包含，我们接下来检查 s2's2 
// ′
//   是否在字典中，如果两个字符串都满足要求，我们让 \text{dp}[i]dp[i] 为 \text{true}true ，否则令其为 \text{false}false 。

// Java


var wordBreak = function (s, wordDict) {
  var dp = [];
  dp[0] = true;
  for (let i = 0; i <= s.length; i++) {
    for (j = 0; j < i; j++) {
      if (dp[j] && wordDict.includes(s.substring(j, i))) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[s.length];
}


// 640. 求解方程
// 求解一个给定的方程，将x以字符串"x=#value"的形式返回。该方程仅包含'+'，' - '操作，变量 x 和其对应系数。

// 如果方程没有解，请返回“No solution”。

// 如果方程有无限解，则返回“Infinite solutions”。

// 如果方程中只有一个解，要保证返回值 x 是一个整数。

// 示例 1：

// 输入: "x+5-3+x=6+x-2"
// 输出: "x=2"
// 示例 2:

// 输入: "x=x"
// 输出: "Infinite solutions"
// 示例 3:

// 输入: "2x=x"
// 输出: "x=0"
// 示例 4:

// 输入: "2x+3x-6x=x+2"
// 输出: "x=-1"
// 示例 5:

// 输入: "x=x+2"
// 输出: "No solution"
// public class Solution {
//   public String coeff(String x) {
//       if (x.length() > 1 && x.charAt(x.length() - 2) >= '0' && x.charAt(x.length() - 2) <= '9')
//           return x.replace("x", "");
//       return x.replace("x", "1");
//   }
//   public String solveEquation(String equation) {
//       String[] lr = equation.split("=");
//       int lhs = 0, rhs = 0;
//       for (String x: lr[0].split("(?=\\+)|(?=-)")) {
//           if (x.indexOf("x") >= 0) {

//               lhs += Integer.parseInt(coeff(x));
//           } else
//               rhs -= Integer.parseInt(x);
//       }
//       for (String x: lr[1].split("(?=\\+)|(?=-)")) {
//           if (x.indexOf("x") >= 0)
//               lhs -= Integer.parseInt(coeff(x));
//           else
//               rhs += Integer.parseInt(x);
//       }
//       if (lhs == 0) {
//           if (rhs == 0)
//               return "Infinite solutions";
//           else
//               return "No solution";
//       } else
//           return "x=" + rhs / lhs;
//   }
// }


// 给你一个整数数组 nums 。

// 如果一组数字 (i,j) 满足 nums[i] == nums[j] 且 i < j ，就可以认为这是一组 好数对 。

// 返回好数对的数目。

//  

// 示例 1：

// 输入：nums = [1,2,3,1,1,3]
// 输出：4
// 解释：有 4 组好数对，分别是 (0,3), (0,4), (3,4), (2,5) ，下标从 0 开始
// 示例 2：

// 输入：nums = [1,1,1,1]
// 输出：6
// 解释：数组中的每组数字都是好数对
// 示例 3：

// 输入：nums = [1,2,3]
// 输出：0
//  

// 提示：

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100
var arr = []
arr.sort((a, b) => a - b)
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if (i < j && arr[i] === arr[j]) {
      console.log(arr[i], arr[j])

    }
  }
}


// 我们有一些二维坐标，如 "(1, 3)" 或 "(2, 0.5)"，然后我们移除所有逗号，小数点和空格，得到一个字符串S。返回所有可能的原始字符串到一个列表中。

// 原始的坐标表示法不会存在多余的零，所以不会出现类似于"00", "0.0", "0.00", "1.0", "001", "00.01"或一些其他更小的数来表示坐标。此外，一个小数点前至少存在一个数，
// 所以也不会出现“.1”形式的数字。

// 最后返回的列表可以是任意顺序的。而且注意返回的两个数字中间（逗号之后）都有一个空格。



// 示例 1:
// 输入: "(123)"
// 输出: ["(1, 23)", "(12, 3)", "(1.2, 3)", "(1, 2.3)"]
// 示例 2:
// 输入: "(00011)"
// 输出:  ["(0.001, 1)", "(0, 0.011)"]
// 解释: 
// 0.0, 00, 0001 或 00.01 是不被允许的。
// 示例 3:
// 输入: "(0123)"
// 输出: ["(0, 123)", "(0, 12.3)", "(0, 1.23)", "(0.1, 23)", "(0.1, 2.3)", "(0.12, 3)"]
// 示例 4:
// 输入: "(100)"
// 输出: [(10, 0)]
// 解释: 
// 1.0 是不被允许的。
//1.超过0整数开头不能等于0，所有结尾不能等于0
//2.
var str = "(00011)"
var arr = str.split("")
var temp = ""
for (var i = 1; i < arr.length - 2; i++) {

  if (i == 1) {
    temp = arr[i - 1] + arr[i]
    var temArr = str.split(temp)[1].split("")
    if (temArr[1] == 0) {
      console.log(temp + ',' + temArr[0] + '.' + str.split(temp + temArr[0])[1])
    } else {
      var sum = ""
      for (var i = 0; i < temArr.length; i++) {
        sum += arr[i]
        console.log(temp + ',' + sum + '.' + str.split(temp)[1].split("").split(sum)[1])
      }
    }

  } else if (arr[i] == '0') {
    if (arr[i - 1] == "0") {
      console.log(temp + ',' + str.split(temp)[1])
    } else {
      temp += arr[i]
      console.log(temp + ',' + str.split(temp)[1])
    }


  } else {
    // temp+=arr[i]
    console.log(str.split(arr[i])[0] + ',' + str.split(arr[i])[1])
  }
}


// 1480. 一维数组的动态和
// 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。

// 请返回 nums 的动态和。



// 示例 1：

// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。
// 示例 2：

// 输入：nums = [1,1,1,1,1]
// 输出：[1,2,3,4,5]
// 解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。
// 示例 3：

// 输入：nums = [3,1,2,10,1]
// 输出：[3,4,6,16,17]


// 提示：

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6
var nums = [1, 2, 3, 4]
var sum = new Array()
for (let i = 0; i < nums.length; i++) {
  i == 0 ? sum.push(nums[i]) : sum.push(nums[i] + sum[i - 1])
}
console.log(sum)

// 剑指 Offer 58 - II. 左旋转字符串
// 字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。请定义一个函数实现字符串左旋转操作的功能。比如，输入字符串"abcdefg"和数字2，该函数将返回左旋转两位得到的结果"cdefgab"。



// 示例 1：

// 输入: s = "abcdefg", k = 2
// 输出: "cdefgab"
// 示例 2：

// 输入: s = "lrloseumgh", k = 6
// 输出: "umghlrlose"


// 限制：

// 1 <= k < s.length <= 10000
var s = "abcdefg"
console.log(s.slice(0, 2))
console.log(s.slice(2, s.length))

// 剑指 Offer
// 22. 链表中倒数第k个节点
// 输入一个链表，输出该链表中倒数第k个节点。为了符合大多数人的习惯，本题从1开始计数，即链表的尾节点是倒数第1个节点。
// 例如，一个链表有6个节点，从头节点开始，它们的值依次是1、2、3、4、5、6。这个链表的倒数第3个节点是值为4的节点。



// 示例：

// 给定一个链表: 1->2->3->4->5, 和 k = 2.

// 返回链表 4->5.



// 17. 打印从1到最大的n位数
// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

// 示例 1:

// 输入: n = 1
// 输出: [1,2,3,4,5,6,7,8,9]


// 说明：

// 用返回一个整数列表来代替打印
// n 为正整数
var arr = []
for (let i = 1; i < Math.pow(10, n); i++) {
  arr.push(i)
}
//是否考虑大数问题？
console.log(arr)


// 剑指 Offer 05. 替换空格
// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。



// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."
console.log(str.split(" ").join("%20"))

剑指 Offer 54. 二叉搜索树的第k大节点
给定一棵二叉搜索树，请找出其中第k大的节点。



// 示例 1:

// 输入: root = [3,1,4,null,2], k = 1
//    3
//   / \
//  1   4
//   \
//    2
// 输出: 4
// 示例 2:

// 输入: root = [5,3,6,2,4,null,null,1], k = 3
//        5
//       / \
//      3   6
//     / \
//    2   4
//   /
//  1
// 输出: 4


// 限制：

// 1 ≤ k ≤ 二叉搜索树元素个数



// 剑指 Offer 25. 合并两个排序的链表
// 输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

// 示例1：

// 输入：1->2->4, 1->3->4
// 输出：1->1->2->3->4->4
// 限制：

// 0 <= 链表长度 <= 1000


5613. 最富有客户的资产总量
给你一个 m x n 的整数网格 accounts ，其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。返回最富有客户所拥有的 资产总量 。

客户的 资产总量 就是他们在各家银行托管的资产数量之和。最富有客户就是 资产总量 最大的客户。



// 示例 1：

// 输入：accounts = [[1,2,3],[3,2,1]]
// 输出：6
// 解释：
// 第 1 位客户的资产总量 = 1 + 2 + 3 = 6
// 第 2 位客户的资产总量 = 3 + 2 + 1 = 6
// 两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。
// 示例 2：

// 输入：accounts = [[1,5],[7,3],[3,5]]
// 输出：10
// 解释：
// 第 1 位客户的资产总量 = 6
// 第 2 位客户的资产总量 = 10 
// 第 3 位客户的资产总量 = 8
// 第 2 位客户是最富有的，资产总量是 10
// 示例 3：

// 输入：accounts = [[2,8,7],[7,1,3],[1,9,5]]
// 输出：17


// 提示：

// m == accounts.length
// n == accounts[i].length
// 1 <= m, n <= 50
// 1 <= accounts[i][j] <= 100

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {

  let max = 0
  for (let m = 0; m < accounts.length; m++) {
    var sum = 0
    for (let n = 0; n < accounts[m].length; n++) {
      sum += accounts[m][n]
    }
    max = Math.max(max, sum)
  }
  return max
};


// 给你一个整数数组 nums，请你将该数组升序排列。



// 示例 1：

// 输入：nums = [5,2,3,1]
// 输出：[1,2,3,5]
// 示例 2：

// 输入：nums = [5,1,1,2,0,0]
// 输出：[0,0,1,1,2,5]


// 提示：

// 1 <= nums.length <= 50000
// -50000 <= nums[i] <= 50000
var sortArray = function (nums) {
  if (nums.length < 1) return nums
  let index = Math.floor(nums.length / 2)
  let provid = nums.splice(index, 1)[0],
    left = [], right = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < provid) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return sortArray(left).concat([provid], sortArray(right))
};
let nums = [5, 1, 1, 2, 0, 0]
sortArray(nums)