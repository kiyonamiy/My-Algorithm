/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */

// https://leetcode-cn.com/problems/sorted-merge-lcci/solution/mian-shi-ti-1001-he-bing-pai-xu-de-shu-zu-by-leetc/
// 双指针

var merge = function(A, m, B, n) {
  const result = [];
  let cur1 = 0,
    cur2 = 0;

  while (cur1 < m && cur2 < n) {
    if (A[cur1] < B[cur2]) {
      result.push(A[cur1]);
      cur1++;
    } else {
      result.push(B[cur2]);
      cur2++;
    }
  }
  while (cur1 < m) {
    result.push(A[cur1]);
    cur1++;
  }
  while (cur2 < n) {
    result.push(B[cur2]);
    cur2++;
  }
  for (let i = 0; i < m + n; i++) {
    A[i] = result[i];
  }
};
