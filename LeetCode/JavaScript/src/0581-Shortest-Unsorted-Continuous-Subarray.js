/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = (nums) => {
    const copyArray = [...nums];
    copyArray.sort((a, b) => a - b);

    let left = 0;
    while(left < nums.length && copyArray[left] === nums[left]) {
        left ++;
    }
    let right = nums.length - 1;
    while(right >= left && copyArray[right] === nums[right]) {
        right --;
    }
    return right - left + 1;
};