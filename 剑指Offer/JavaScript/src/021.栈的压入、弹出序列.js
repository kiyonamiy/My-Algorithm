/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-30 14:02:25 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-30 14:09:53
 */
function IsPopOrder(pushV, popV) {
    let stack = [];
    let cur = 0;
    stack.push(pushV[cur ++]);

    for(let i = 0; i < popV.length; i ++) {
        while(cur < pushV.length && stack[stack.length - 1] !== popV[i]) {
            stack.push(pushV[cur ++]);
        }
        if(stack[stack.length - 1] === popV[i]) {
            stack.pop();
        }
    }
    return stack.length === 0;
}