/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-30 12:20:03 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-30 12:46:49
 */

// 这道题只说有个函数能返回最小值，并不是说每次 pop() 都是最小值!!!
//只需要一个辅助栈记录当前栈中小值即可。

let stack = [], stackMin = [];

function push(node) {
    if(stackMin.length === 0) {
        stackMin.push(node);
        stack.push(node);
        return;
    }

    if(node <= stackMin[stackMin.length - 1]) {     // 只允许更小的入辅助栈
        stackMin.push(node);
    }
    stack.push(node);
}

function pop() {
    const stackTop = stack.pop();
    if(stackTop === stackMin[stackMin.length - 1]) {    // 当栈顶就是最小值时，辅助栈也弹出，下一个就是当前栈的最小值
        stackMin.pop();
    }
    return stackTop;
}

function top() {
    return stack[stack.length - 1] || 0;             // 牛客网的边界也不说清楚 一开始越界 返回 null
}

function min() {
    return stackMin[stackMin.length - 1] || 0;
}

// pop();
// push(5);
// push(4);
// push(3);
// push(8);
// push(10);
// push(11);
// push(12);
// push(1);
// pop();
// pop();
// pop();
// pop();
// pop();
// pop();
// pop();
// pop();
// pop();
// top();