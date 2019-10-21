/**
 * @param {number[]} nums
 * @return {number}
 */

var findMin = (nums) => {
    let left = 0, right = nums.length - 1;
    while(left < right) {
        if(nums[left] < nums[right]) {
            return nums[left];
        }

        const mid = left + parseInt((right - left) / 2);

        if(nums[left] < nums[mid]) {
            left = mid + 1;
        } else if(nums[left] > nums[mid]) {
            right = mid;
        } else {
            left ++;
        }
    }

    return nums[left];
};