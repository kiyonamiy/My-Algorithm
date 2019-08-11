// 得到一个数据流中的中位数
const array = [];

function Insert(num) {
    let flag = false;
    // 类似插入排序
    for(let i = 0; i < array.length; i ++) {
        if(num < array[i]) {
            array.splice(i, 0, num);
            flag = true;
            break;
        }
    }
    if(!flag) {
        array.push(num);
    }
}
function GetMedian() {
    let mid = parseInt(array.length / 2);
    if(array.length % 2 === 1) {
        return array[mid];
    } else {
        return (array[mid - 1] + array[mid]) / 2;
    }
}