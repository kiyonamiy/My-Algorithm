/**
 * @param {number[]} nums
 * @return {number}
 */

// 旋转的数组规律：数组第一个元素一定大于数组最后一个元素（因为把小元素往后折了
var findMin = (nums) => {
    let left = 0, right = nums.length - 1;
    while(left < right) {
        // 说明该段递增有序
        if(nums[left] < nums[right]) {
            return nums[left];
        }

        const mid = left + parseInt((right - left) / 2);

        // 因为通过上面那个 if ，说明该数组选中段是旋转后的，不是递增有序数组
        // 说明前面一段是递增的，最小值肯定不在里面，肯定在后半段
        if(nums[left] < nums[mid]) {
            left = mid + 1;
        // 满足条件的，一定是中间会突然凹陷进去的（最大值和最小值一定黏在一起（想象曲线图
        } else if(nums[left] > nums[mid]) {
            right = mid;
        // nums[left] === nums[mid]
        } else {
            left ++;
        }
    }

    return nums[left];
};