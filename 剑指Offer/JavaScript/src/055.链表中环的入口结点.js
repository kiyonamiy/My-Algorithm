/**
 * 给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 */

/**
 * 
 * 链接：https://www.nowcoder.com/questionTerminal/253d2c59ec3e4bc68da16833f79a38e4?f=discussion
 * 来源：牛客网

第一步，找环中相汇点。分别用p1，p2指向链表头部，p1每次走一步，p2每次走二步，直到p1==p2找到在环中的相汇点。
第二步，找环的入口。接上步，当p1==p2时，p2所经过节点数为2x,p1所经过节点数为x,设环中有n个节点,p2比p1多走一圈有2x=n+x; n=x;
       可以看出p1实际走了一个环的步数，再让p2指向链表头部，p1位置不变，p1,p2每次走一步直到p1==p2; 此时p1指向环的入口。
 */

function ListNode(x){
    this.val = x;
    this.next = null;
}
function EntryNodeOfLoop(pHead)
{
    if(pHead == null || pHead.next == null) {
        return null;
    }
    if(pHead.next.next == pHead) {
        return pHead;
    }
    // 找到相遇点
    let p1 = pHead, p2 = pHead.next;
    while(p1 !== p2) {
        if(p2 != null && p2.next != null) {
            p1 = p1.next;
            p2 = p2.next.next;
        } else {
            return null;
        }
    }
    // 找到入口
    p1 = pHead;
    p2 = p2.next;
    while(p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}

// const node1 = new ListNode(1);
// const node2 = new ListNode(2);
// const node3 = new ListNode(3);
// const node4 = new ListNode(4);
// const node5 = new ListNode(5);

// node1.next = node2;
// node2.next = node3;
// node3.next = node4;
// node4.next = node2;

// console.log(EntryNodeOfLoop(node1));