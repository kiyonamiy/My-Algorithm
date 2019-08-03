function LeftRotateString(str, n)
{
    if(str == null || str.length === 0) {
        return "";
    }
    n = n % str.length;
    return `${str.substring(n)}${str.substring(0, n)}`;
}

// console.log(LeftRotateString("abcXYZdef", 3));