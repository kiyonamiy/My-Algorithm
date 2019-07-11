/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = (nums1, nums2) => {
    // let nums = [...nums1, ...nums2].sort((a, b) => {
    //     return a - b;
    // });
    let nums = [];
    while()
    let len = nums.length;
    let index = parseInt(len / 2);
    if(len % 2) {
        return nums[index];
    } else {
        return (nums[index] + nums[index - 1]) / 2;
    }
};

findMedianSortedArrays([1, 3], [2]);