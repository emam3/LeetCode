/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function hasCycle(head: ListNode | null): boolean {
    if(!head) return false;
    if(!head.next) return false;
    
    let slowPointer: ListNode = head;
    let speedPointer: ListNode = head
    
    while(speedPointer && speedPointer.next) {
        slowPointer = slowPointer.next;
        
        speedPointer = speedPointer.next.next;
        
        if(slowPointer == speedPointer) return true;
    }
    
    return false;
};