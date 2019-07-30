/*
 * @Author: KiyonamiYu 
 * @Date: 2019-07-30 15:04:49 
 * @Last Modified by: KiyonamiYu
 * @Last Modified time: 2019-07-30 15:52:52
 */
function RandomListNode(x){
    this.label = x;
    this.next = null;
    this.random = null;
}

function Clone(pHead) {
    if(pHead == null) {
        return null;
    }
    // 新建节点，链接到每个原节点的后面
    let cur = pHead;
    while(cur != null) {
        let newNode = new RandomListNode(cur.label);
        newNode.next = cur.next;
        cur.next = newNode;

        cur = cur.next.next;
    }
    // 链接每个新节点的 random
    cur = pHead;
    while(cur != null) {
        let newNode = cur.next;
        if(cur.random != null) {
            newNode.random = cur.random.next;
        }
        cur = cur.next.next;
    }
    // 拆分
    const newHead = pHead.next;
    cur = newHead;
    while(cur.next != null) {
        cur.next = cur.next.next;
        cur = cur.next;
    }
    return newHead;
}

// const node1 = new RandomListNode(1);
// const node2 = new RandomListNode(2);
// const node3 = new RandomListNode(3);

// node1.next = node2;
// node2.next = node3;
// node1.random = node3;

// console.log(Clone(node1));