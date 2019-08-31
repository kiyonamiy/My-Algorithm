/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = (nums, target) => {
    if(nums == null || nums.length === 0) {
        return [-1, -1];
    }

    let start = nums.length, end = -1;
    const recursion = (left, right) => {
        if(left > right) {
            return;
        }
        const mid = left + Math.floor((right - left) / 2);
        if(nums[mid] === target) {
            start = Math.min(start, mid);
            end = Math.max(end, mid);
            recursion(left, mid - 1);
            recursion(mid + 1, right);
            return;
        }
        if(target > nums[mid]) {
            recursion(mid + 1, right);
        } else {
            recursion(left, mid - 1);
        }
    }
    recursion(0, nums.length - 1);

    if(start > end) {
        return [-1, -1];
    } else {
        return [start, end];
    }
};

// const nums = [1];
// const target = 0;
// searchRange(nums, target);