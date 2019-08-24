/*
 * @Author: KiyonamiYu 
 * @Date: 2019-08-24 11:58:39 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-08-24 12:19:15
 */
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    if(intervals.length <= 1) {
        return 0;
    }

    intervals.sort((a, b) => {
        return a[1] - b[1];
    })

    let count = 0;
    let nowInterval = intervals[0];
    for(let i = 1; i < intervals.length; i ++) {
        if(nowInterval[1] > intervals[i][0]) {
            count ++;
        } else {
            nowInterval = intervals[i];
        }
    }
    return count;
};