/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-14 17:21:37 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-14 17:27:16
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// let singleNumber = nums => {
//     nums.sort((a, b) => {
//         return a - b;
//     });
//     for(let i = 0; i < nums.length - 1; i ++) {
//         if(nums[i] === nums[i + 1]) {
//             i ++;
//         } else {
//             return nums[i];
//         }
//     }
//     return nums[nums.length - 1];
// };

/**
 * 
we use bitwise XOR to solve this problem :
first , we have to know the bitwise XOR in java
0 ^ N = N
N ^ N = 0

So..... if N is the single number
N1 ^ N1 ^ N2 ^ N2 ^..............^ Nx ^ Nx ^ N
= (N1^N1) ^ (N2^N2) ^..............^ (Nx^Nx) ^ N
= 0 ^ 0 ^ ..........^ 0 ^ N
= N
 */
let singleNumber = nums => {
    let ans = 0;
    for(let i = 0; i < nums.length; i ++) {
        ans ^= nums[i];
    }
    return ans;
}