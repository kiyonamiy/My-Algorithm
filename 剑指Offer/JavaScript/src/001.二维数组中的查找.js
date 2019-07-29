const Find = (target, array) => {
    for(let i = 0; i < array.length; i ++) {
        // for(let j = 0; j < array[i].length; j ++) {
        //     if(array[i][j] === target) {
        //         return true;
        //     }
        // }
        let left = 0, right = array[i].length - 1;
        while(left <= right) {
            let mid = parseInt(left + (right - left) / 2);
            if(array[i][mid] === target) {
                return true;
            } else if(array[i][mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return false;
}

Find(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]);