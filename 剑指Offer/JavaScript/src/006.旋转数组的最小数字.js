function minNumberInRotateArray(rotateArray) {
    if(rotateArray.length === 0) {
        return 0;
    }
    return Math.min(...rotateArray);
}