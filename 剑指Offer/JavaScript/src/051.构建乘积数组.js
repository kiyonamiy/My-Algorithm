/**
 * 给定一个数组A[0,1,...,n-1],请构建一个数组B[0,1,...,n-1],其中B中的元素B[i]=A[0]*A[1]*...*A[i-1]*A[i+1]*...*A[n-1]。不能使用除法。
 */

 /**
  * 链接：https://www.nowcoder.com/questionTerminal/94a4d381a68b47b7a8bed86f2975db46?f=discussion
  * 来源：牛客网

剑指的思路：
B[i]的值可以看作下图的矩阵中每行的乘积。

下三角用连乘可以很容求得，上三角，从下向上也是连乘。
因此我们的思路就很清晰了，先算下三角中的连乘，即我们先算出B[i]中的一部分，然后倒过来按上三角中的分布规律，把另一部分也乘进去。

  */

function multiply(array)
{
    const bArray = [];

    // 下三角 计算
    bArray[0] = 1;
    for(let i = 1; i < array.length; i ++) {
        bArray[i] = bArray[i - 1] * array[i - 1];
    }
    // 上面计算的结果 结合 上三角 计算 (从底下往上)
    let temp = 1;
    for(let i = array.length - 2; i >= 0; i --) {
        temp = array[i + 1] * temp;
        bArray[i] = bArray[i] * temp;
    }
    return bArray;
}