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

/**
 Do not return anything, modify head in-place instead.
 */
function reorderList(head: ListNode | null): void {
    if (head === null || head.next === null) return; 
    
    let listToArr: any[] = [];
    let dum = head;
    while(dum?.val) {
        listToArr.push(dum.val);
        dum = dum.next;
    }
    
    
    
    let counter_front: number = listToArr.length -1; // 3
    let counter_back: number = 0; // 0
    dum = head;
    while(true) { // [0, 1, 2, 3]    =>     [0, 3, 1, 2]
        // console.log(head)
        dum.val = listToArr[counter_back]; 
        dum.next = new ListNode();
        dum = dum.next;
        dum.val = listToArr[counter_front];
        
        
        counter_back++; // counter_back = 1        2
        counter_front--; // counter_front = 2      1
        
        if(counter_back === counter_front) {
            dum.next = new ListNode();
            dum = dum.next;
            dum.val = listToArr[counter_back];
            break;
        } else if (counter_back > counter_front) {
            break;
        }
        dum.next = new ListNode();
        dum = dum.next;
    }
    head = dum;
};

