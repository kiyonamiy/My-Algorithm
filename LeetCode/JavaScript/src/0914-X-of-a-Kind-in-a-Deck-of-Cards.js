/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-04 10:32:48 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-04 13:48:00
 */

const hasGroupsSizeX = deck => {
    const map = new Map();
    for(let num of deck) {
        if(!map.has(num)) {
            map.set(num, 0);
        }
        map.set(num, map.get(num) + 1);
    }
    let minCount = Number.POSITIVE_INFINITY;
    for(let value of map.values()) {
        if(value < minCount) {
            minCount = value;
        }
    }
    let gcdResult = 0;
    for(const value of map.values()) {
        gcdResult = gcd(gcdResult, value);
    }
    return gcdResult >= 2;
};

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
}

export default hasGroupsSizeX;