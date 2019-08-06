//s字符串
function isNumeric(s) {
    // 标记符号、小数点、e是否出现过
    let sign = false, decimal = false, hasE = false;
    for(let i = 0; i < s.length; i ++) {
        if(s[i] === 'e' || s[i] === 'E') {
            // 不能同时存在两个e
            if(hasE) {
                return false;
            }
            // e后面一定要接数字
            if(i === s.length - 1) {
                return false;
            }
            hasE = true;
        } else if(s[i] === '+' || s[i] === '-') {
            // 第二次出现+-符号，则必须紧接在e之后
            if(sign && (s[i - 1] != 'e' && s[i - 1] != 'E')) {
                return false;
            }
            // 第一次出现+-符号，且不是在字符串开头，则也必须紧接在e之后
            if(!sign && i > 0 && (s[i - 1] != 'e' && s[i - 1] != 'E')) {
                return false;
            }
            sign = true;
        } else if(s[i] === '.') {
            // e后面不能接小数点，小数点不能出现两次
            if(hasE || decimal) {
                return false;
            }
            decimal = true;
        } else if(s[i] < '0' || s[i] > '9') {   // 不合法字符
            return false;
        }
    }
    return true;
}

isNumeric('+100');