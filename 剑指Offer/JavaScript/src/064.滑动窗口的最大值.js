/**
 * 给定一个数组和滑动窗口的大小，找出所有滑动窗口里数值的最大值。
 * 例如，如果输入数组{2,3,4,2,6,2,5,1}及滑动窗口的大小3，那么一共存在6个滑动窗口，他们的最大值分别为{4,4,6,6,6,5}； 
 * 针对数组{2,3,4,2,6,2,5,1}的滑动窗口有以下6个： 
 * {[2,3,4],2,6,2,5,1}， 
 * {2,[3,4,2],6,2,5,1}， 
 * {2,3,[4,2,6],2,5,1}， 
 * {2,3,4,[2,6,2],5,1}， 
 * {2,3,4,2,[6,2,5],1}， 
 * {2,3,4,2,6,[2,5,1]}。
 */

/**
 * 使用了类似 020.包含min函数的栈 的思想，只是将最小栈变成了最大队列（虽然得自己强制补充元素）
 */

function maxInWindows(num, size) {
    const result = [];

    if(size <= 0 || num.length < size) {
        return result;
    }

    // 初始化最大队列
    const maxQueue = [];
    maxQueue.push(num[0]);
    for(let i = 1; i < size; i ++) {
        if(num[i] > maxQueue[maxQueue.length - 1]) {      // 只允许更大的入辅助队列
            maxQueue.push(num[i]);
        }
    }
    result.push(maxQueue[maxQueue.length - 1]);

    for(let i = size; i < num.length; i ++) {
        // 删队头
        if(maxQueue[0] === num[i - size]) {
            maxQueue.shift();
        }
        // 添加更大值
        if(maxQueue.length > 0) {
            if(num[i] > maxQueue[maxQueue.length - 1]) {
                maxQueue.push(num[i]);
            }
        } else {
            // 当 maxQueue 为空时，得重新补充数字
            maxQueue.push(num[i - size + 1]);
            for(let j = i - size + 2; j <= i; j ++) {
                if(num[j] > maxQueue[maxQueue.length - 1]) {
                    maxQueue.push(num[j]);
                }
            }
        }
        result.push(maxQueue[maxQueue.length - 1]);
    }
    return result;
}


// const nums = [2,3,4,2,6,2,5,1];
// const size = 3;
// console.log(maxInWindows(nums, size));