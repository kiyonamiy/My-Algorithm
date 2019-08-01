// 对撞指针
function GetNumberOfK(data, k)
{
    let op = 0, ed = data.length - 1;
    while(op <= ed && (data[op] !== k || data[ed] !== k)) {
        if(data[op] !== k) {
            op ++;
        }
        if(data[ed] !== k) {
            ed --;
        }
    }
    return op <= ed ? ed - op + 1: 0;
}

GetNumberOfK([3,3,3,3,4,5],3);