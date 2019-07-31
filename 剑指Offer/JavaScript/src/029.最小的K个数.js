function GetLeastNumbers_Solution(input, k) {
    if(input.length < k) {
        return [];
    }
    input.sort((a, b) => {
        return a - b;
    });
    return input.splice(0, k);
}