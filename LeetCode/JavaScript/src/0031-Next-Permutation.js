/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 找到给定数字列表的下一个字典排列

// https://leetcode-cn.com/problems/next-permutation/solution/xia-yi-ge-pai-lie-by-leetcode/
// 看动图即可
// 例如：求 [1, 5, 8, 4, 7, 6, 5, 3, 1]
// 1. 从末尾开始找，[1, 3, 5, 6, 7]（升序）,找到*第一个*降序的---4。
// 2. 再从刚刚升序的那一段中寻找*第一个*比 4 大的数，[1, 3, 5]---5。
// 3. 交换 4 和 5，这样做的目的是排列组合前几个[1, 5, 8, 4]固定，下一组排序固定是[1, 5, 8, 5]次大。
// 4. 反转[7, 6, 4, 3, 1]，使整体变为[1, 5, 8, 5, 1, 3, 4, 6, 7]，成为[1, 5, 8, 5]开头的最小排列。
// 感受到数学排列组合的重要。
var nextPermutation = nums => {
    if(nums == null || nums.length === 0 || nums.length === 1) {
        return nums;
    }
    // 1. finding first decreasing number nums[i - 1]
    let index1 = nums.length - 2;
    while(index1 >= 0 && nums[index1] >= nums[index1 + 1]) {
        index1 --;
    }
    if(index1 < 0) {        // 说明已经最大排序[4,3,2,1]，下一个则最初
        return nums.reverse();
    }
    // 2. finding number just larger than nums[i - 1]
    let index2 = nums.length - 1;
    while(index2 >= index1 + 1 && nums[index2] <= nums[index1]) {
        index2 --;
    }
    // 3. swap
    [nums[index1], nums[index2]] = [nums[index2], nums[index1]];        // 数组解构也可以用来进行值的互换，而不需要创建临时变量
    // 4. reverse
    let left = index1 + 1, right = nums.length - 1;
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left ++, right --;
    }
    return nums;
};

// nextPermutation([1, 3, 2]);