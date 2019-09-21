/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const detectCycle = (head) => {
    if(head == null || head.next == null) {
        return null;
    }

    let slowNode = head;
    let fastNode = head.next;

    while(fastNode !== slowNode) {
        if(fastNode == null || fastNode.next == null) {
            return null;
        }
        slowNode = slowNode.next;
        fastNode = fastNode.next.next;
    }
    slowNode = head;
    fastNode = fastNode.next;
    while(fastNode !== slowNode) {
        fastNode = fastNode.next;
        slowNode = slowNode.next;
    }
    return fastNode;
};