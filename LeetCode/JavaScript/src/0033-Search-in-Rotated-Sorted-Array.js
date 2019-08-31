var search = (nums, target) => {
    if(nums.length === 0) {
        return -1;
    }
    let left = 0, right = nums.length - 1;
    while(left <= right) {
        // 测试代码
        // const testArray = [];
        // for(let i = left; i <= right; i ++) {
        //     testArray.push(nums[i]);
        // }

        let mid = left + Math.floor((right - left) / 2);

        // console.log(`mid = ${nums[mid]} | array = ${testArray}`);

        if(nums[mid] === target) {
            return mid;
        }
        // 前半部分有序，注意此处用小于等于
        if(nums[left] <= nums[mid]) {
            // 在前半部分
            if(nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            // 不在前半部分，重新定位到后半部分
            } else {
                left = mid + 1;
            }
        } else {
            if(nums[right] >= target && target > nums[mid]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return -1;
}

// const nums = [7,0,1,2, 4, 5, 6];
// // // const nums = [7, -1];
// const target = 0;
// search(nums, target);