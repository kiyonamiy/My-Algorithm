/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead)
{
    if(pHead == null) {
        return null;
    }
    let pre = null, cur = pHead;
    while(cur != null) {
        let next = cur.next;
        cur.next = pre;
        
        pre = cur;
        cur = next;
    }
    return pre;
}