/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function(S) {
    let stack = new Array();
    for(let s of S) {
        if(stack.length == 0 || stack[stack.length - 1] !== s) {
            stack.push(s);
        } else {
            stack.pop();
        }
    }
    return stack.join('');
};