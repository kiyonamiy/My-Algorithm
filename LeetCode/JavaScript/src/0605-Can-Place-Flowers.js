/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-04 16:12:48 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-04 16:36:32
 */
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
let canPlaceFlowers = (flowerbed, n) => {
    for(let i = 0; i < flowerbed.length; i ++) {
        if(!flowerbed[i]) {
            if(i - 1 >= 0 && flowerbed[i - 1]) {
                continue;
            }
            if(i + 1 < flowerbed.length && flowerbed[i + 1]) {      // 居然这边写 i + 1 < n n 不是长度阿
                continue;
            }
            flowerbed[i] = 1;
            n --;
            if(n <= 0) {
                break;
            }
        }
    }
    if(n <= 0) {
        return true;
    } else {
        return false;
    }
};

export default canPlaceFlowers;