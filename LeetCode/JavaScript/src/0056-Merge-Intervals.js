/*
 * @Author: KiyonamiYu 
 * @Date: 2019-08-24 11:39:11 
 * @Last Modified by:   KiyonamiYu 
 * @Last Modified time: 2019-08-24 11:39:11 
 */
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(intervals.length <= 1) {
        return intervals;
    }
    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    const result = [];
    let newInterval = intervals[0];
    for(let i = 1; i < intervals.length; i ++) {
        if(intervals[i][0] <= newInterval[1]) {
            newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
        } else {
            result.push(newInterval);
            newInterval = intervals[i];
        }
    }
    result.push(newInterval);
    return result;
};

// console.log(merge([[1,4],[4,5]]));