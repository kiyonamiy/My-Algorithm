function reOrderArray(array)
{
    const odds = [];
    const evens = [];
    for(let num of array) {
        if(num % 2) {
            odds.push(num);
        } else {
            evens.push(num);
        }
    }
    odds.push(...evens);
    return odds;
}