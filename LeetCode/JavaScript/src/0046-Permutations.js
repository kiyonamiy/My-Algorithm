var permute = nums => {
    const result = [];
    if(nums == null || nums.length === 0) {
        return result;
    }

    const recursion = startIndex => {
        if(startIndex === nums.length - 1) {
            result.push([...nums]);
            return;
        }
        for(let i = startIndex; i < nums.length; i ++) {
            [nums[startIndex], nums[i]] = [nums[i], nums[startIndex]];      // 解读
            recursion(startIndex + 1);                                      
            [nums[startIndex], nums[i]] = [nums[i], nums[startIndex]];      // 复原数组
        }
    }
    recursion(0);
    return result;
}

// 解读
// 一开始自己交换自己，一路到底 [0, 1, 2]   
// 退回来 startIndex = 1, i + 1 后等于 2，即 [1, 2]，交换变成 [0, 2, 1]。 {2}
// 到底后，再退回来 startIndex = 0， i + 1 后等于 1，即 [0, 1]，交换变成 [1, 0, 2]。
// 经过 {1} ，[1, 0, 2]。
// 经过 {2} ，[1, 2, 0]。