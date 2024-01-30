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

function reverseList(head: ListNode | null): ListNode | null {
    
    let currentEelement: ListNode = head;
    let holder = [];
    
    while(currentEelement !== null) {
        holder.push(currentEelement.val);
        currentEelement = currentEelement.next;
    }
    
    holder.reverse();
    
    let dummyNode: ListNode = new ListNode();
    let currentNode: ListNode | null = dummyNode;

    
    for(let i = 0 ; i < holder.length ; i++) {
        currentNode.next = new ListNode(holder[i]);
        currentNode = currentNode.next;
    }
    
    return dummyNode.next;

};