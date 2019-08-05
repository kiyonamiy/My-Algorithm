function isNum(ch) {
    if(ch.charCodeAt() > '9'.charCodeAt() || ch.charCodeAt() < '0') {
        return false;
    }
    return true;
}

function StrToInt(str)
{
    if(str == null || str.length === 0) {
        return 0;
    }

    let result = 0;
    let multiplier = 1;
    const strArray = str.split('');
    for(let i = strArray.length - 1; i >= 0; i --) {
        if(i === 0) {
            if(strArray[i] == '+') {
                return result;
            }
            if(strArray[i] === '-') {
                return -result;
            }
        }
        if(!isNum(strArray[i])) {
            return 0;
        }
        result += (strArray[i].charCodeAt() - '0'.charCodeAt()) * multiplier;
        multiplier *= 10;
    }
    return result;
}