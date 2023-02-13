/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function(head) {
       let current = head;
    let result = [];

    while(current) {

        let max = 0;
        let nextGreaterNode = current.next;

        while(nextGreaterNode) {
            if (nextGreaterNode.val > current.val) {
                max = nextGreaterNode.val;
                break;
            }
            nextGreaterNode = nextGreaterNode.next;
        }

        result.push(max);
        current = current.next;
    }

    return result; 
};
