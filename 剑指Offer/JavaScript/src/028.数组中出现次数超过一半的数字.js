/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-31 16:23:29 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-31 16:28:28
 */
function MoreThanHalfNum_Solution(numbers) {

    const map = new Map();
    for(let i = 0; i < numbers.length; i ++) {
        if(!map.has(numbers[i])) {
            map.set(numbers[i], 0);
        }
        const count = map.get(numbers[i]) + 1;
        if(count > numbers.length / 2) {
            return numbers[i];
        } else {
            map.set(numbers[i], count);
        }
    }
    return 0;
}