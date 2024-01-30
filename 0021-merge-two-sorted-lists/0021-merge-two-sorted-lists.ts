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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
    let dummy: ListNode = new ListNode();
    let list3: ListNode = dummy;
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            list3.next = list1;
            list1 = list1.next;
        } else {
            list3.next = list2;
            list2 = list2.next;
        }
        list3 = list3.next;
    }
    
    if (list1 !== null) list3.next = list1;
    if (list2 !== null) list3.next = list2;
    
    return dummy.next;
};