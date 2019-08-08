const record = new Array(256);
const queue = [];
//Init module if you need
function Init()
{
    // write code here
    record.fill(0);
    while(queue.length !== 0) {
        queue.shift();
    }
}
//Insert one char from stringstream
function Insert(ch)
{
    record[ch.charCodeAt()] ++;
    if(record[ch.charCodeAt()] === 1) {
        queue.push(ch);
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce()
{
    // 在获取的时候再判断（一开始想插入的时候就判断，这样就得 for 循环遍历出现第二次的值的位置删去
    while(queue[0] && record[queue[0].charCodeAt()] !== 1) {
        queue.shift();
    }
    return queue[0] || '#';
}

// Init();
// Insert('g');
// Insert('o');
// console.log(FirstAppearingOnce());
// Insert('o');
// Insert('g');
// console.log(FirstAppearingOnce());
// Insert('l');
// Insert('e');
// console.log(FirstAppearingOnce());


