// 对撞指针
function FindNumbersWithSum(array, sum)
{
    if(array.lenght === 0) {
        return [];
    }
    let left = 0, right = array.length - 1;
    while(left < right) {
        const nowSum = array[left] + array[right];
        if(nowSum < sum) {
            left ++;
        } else if(nowSum > sum) {
            right --;
        } else {
            return [array[left], array[right]];
        }
    }
    return [];
}