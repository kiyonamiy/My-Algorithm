/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-31 22:42:58 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-31 23:55:01
 */
function PrintMinNumber(numbers)
{
    if(numbers.length === 0) {
        return "";
    }

    const swap = (a, b) => {
        let temp = numbers[a];
        numbers[a] = numbers[b];
        numbers[b] = temp;
    }

    let minNumber = "A";
    const recursion = startIndex => {
        if(startIndex === numbers.length - 1) {
            let fixedNumber = "";
            for(let num of numbers) {
                fixedNumber += num;
            }
            if(fixedNumber < minNumber) {
                minNumber = fixedNumber;
            }
            return;
        }
        for(let i = startIndex; i < numbers.length; i ++) {
            swap(startIndex, i);
            recursion(startIndex + 1);
            swap(startIndex, i);
        }
    }
    recursion(0);
    return minNumber;
}

