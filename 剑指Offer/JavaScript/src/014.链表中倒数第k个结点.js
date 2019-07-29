// function ListNode(x){
//     this.val = x;
//     this.next = null;
// }

function FindKthToTail(head, k)
{
    if( head == null || k <= 0) {
        return null;
    }

    let beforeK = head;
    for(let i = 0; i < k; i ++) {
        if(beforeK == null && i < k) {      // 这个判断要在 beforeK = beforeK.next; 之前！
            return null;
        }
        beforeK = beforeK.next;
    }
    let cur = head;
    while(beforeK != null) {
        cur = cur.next;
        beforeK = beforeK.next;
    }
    return cur;
}

// let head = new ListNode(1);
// head.next = new ListNode(2);
// head.next.next = new ListNode(3);
// head.next.next.next = new ListNode(4);
// head.next.next.next.next = new ListNode(5);
// FindKthToTail(head, 5);