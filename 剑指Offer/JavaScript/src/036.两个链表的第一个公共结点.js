function FindFirstCommonNode(pHead1, pHead2)
{
    let cur = pHead1;
    while(cur != null) {
        cur.tag = true;
        cur = cur.next;
    }
    cur = pHead2;
    while(cur != null) {
        if(cur.tag) {
            return cur;
        }
        cur = cur.next;
    }
    return null;
}