/**
 * @param {number} n
 * @return {string[]}
 */
let generateParenthesis = n => {
    let ansList = [];

    const recurse = (str, openNum, closeNum) => {
        if(str.length === n * 2) {
            ansList.push(str);
            return;
        }

        if(openNum < n) {
            recurse(`${str}(`, openNum + 1, closeNum);
        }
        if(closeNum < openNum) {
            recurse(`${str})`, openNum, closeNum + 1);
        }
    }

    recurse('', 0, 0);
    return ansList;
};