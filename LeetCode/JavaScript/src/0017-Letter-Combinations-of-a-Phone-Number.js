/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = digits => {
    if(!digits) {
        return [];
    }
    const phoneButtons =  [
        [],
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z']
    ];
    const nums = digits.split('');
    const queue = [];
    nums.forEach(item => {
        if(phoneButtons[item].length <= 0) {
            return;
        }
        queue.push(phoneButtons[item]);
    })
    while(queue.length > 1) {
        const letters1 = queue.shift();
        const letters2 = queue.shift();
        const combination = [];
        for(let i = 0; i < letters1.length; i ++) {
            for(let j = 0; j < letters2.length; j ++) {
                combination.push(`${letters1[i]}${letters2[j]}`);
            }
        }
        queue.unshift(combination);
    }
    return queue.shift();
};