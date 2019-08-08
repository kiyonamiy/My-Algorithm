function ListNode(x){
    this.val = x;
    this.next = null;
}

function deleteDuplication(pHead)
{
    let dummyHead = new ListNode(null);
    dummyHead.next = pHead;
    let pre = dummyHead, cur = dummyHead.next;
    while(cur != null && cur.next != null) {
        if(cur.val === cur.next.val) {
            let curVal = cur.val;
            while(cur != null && cur.val === curVal) {
                cur = cur.next;
            }
            pre.next = cur;     // 接连相等的话，pre 一直没变，只是 pre.next 一直在改变
        } else {
            pre = pre.next;
            cur = cur.next;
        }
    }
    return dummyHead.next;
}

// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// let node4 = new ListNode(3);
// let node5 = new ListNode(4);
// let node6 = new ListNode(4);
// let node7 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node5;
// node5.next = node6;
// // node6.next = node7;

// console.log(deleteDuplication(node1));