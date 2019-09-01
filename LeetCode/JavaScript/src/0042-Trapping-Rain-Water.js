/*
 * @Author: KiyonamiYu 
 * @Date: 2019-09-01 22:33:23 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-09-01 23:10:26
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = height => {
    if(height == null || height.length === 0) {
        return 0;
    }

    let left = 0, right = height.length - 1;
    let level = 0;
    let trappedWater = 0;
    while(left < right) {
        const lower = height[height[left] < height[right] ? left ++ : right --];    // 总是取最低值，并取值后变换下标
        level = Math.max(level, lower);     // 每次都是从已有的最低值取最大值，保证能和更小的围成沟壑       // 0,0,5,0 比如 5 就取不到
        trappedWater += level - lower;
    }
    return trappedWater;
};