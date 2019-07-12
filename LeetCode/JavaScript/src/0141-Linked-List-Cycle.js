class ListNode {
    constructor(val) {
        this.val = val;
        this.next = next;
    }
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */
let hasCycle = head => {
    if(head === null || head.next === null) {
        return false;
    }
    let slow = head, fast = head.next;
    while(slow != fast) {
        if(!fast || !fast.next) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};

// 时间复杂度也是 o(n + k) 即 o(n) 其中 k 为循环这个环的长度 空间复杂度为o(1)