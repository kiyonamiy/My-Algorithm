function FindContinuousSequence(target) {
    const result = [];
    if(target < 3) {
        return result;
    }

    let left = 1, right = 2;
    let sum = 3;
    while(left < right) {
        if(sum > target) {
            sum -= left;
            left ++;
        } else if(sum < target) {
            right ++;
            sum += right;
        } else {
            const newSequence = [];
            for(let i = left; i <= right; i ++) {
                newSequence.push(i);
            }
            result.push(newSequence);

            sum -= left;
            left ++;
        }
    }
    return result;
}