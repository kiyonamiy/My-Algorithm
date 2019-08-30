/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = (candidates, target) => {
    
    const result = [];

    const recursion = (index, preArray, target) => {
        if(target === 0) {
            result.push([...preArray]);
            return;
        }
        if(target < 0 || index >= candidates.length) {
            return;
        }
        for(let i = index; i < candidates.length; i ++) {
            const nowArray = [...preArray];
            nowArray.push(candidates[i]);
            recursion(i, nowArray, target - candidates[i]);
            nowArray.shift();
        }
    }

    recursion(0, [], target);
    return result;
};

console.log(combinationSum([2,3,6,7], 7));