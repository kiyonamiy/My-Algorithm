/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2)
{
    let dummyHead = new ListNode(null);
    let cur = dummyHead;
    let cur1 = pHead1, cur2 = pHead2;
    while(cur1 != null && cur2 != null) {
        if(cur1.val < cur2.val) {
            cur.next = cur1;
            cur1 = cur1.next;
        } else {
            cur.next = cur2;
            cur2 = cur2.next;
        }
        cur = cur.next;
        cur.next = null;        // 断掉所有联系
    }
    if(cur1 != null) {
        cur.next = cur1;
    }
    if(cur2 != null) {
        cur.next = cur2;
    }
    return dummyHead.next;
}