function ListNode(x){
    this.val = x;
    this.next = null;
}

let printListFromTailToHead = head => {
    // if(head == null) {
    //     return null;
    // }
    // let pre = null, cur = head;     // 关键 pre 初值 null
    // while(cur != null) {
    //     let next = cur.next;
    //     cur.next = pre;

    //     pre = cur;
    //     cur = next;
    // }
    // return pre;
    let result = [];
    let cur = head;
    while(cur != null) {
        result.push(cur.val);
        cur = cur.next;
    }
    result.reverse();
    return result;
}