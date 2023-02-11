/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    const dumb = new ListNode();
    dumb.next = head;
    if(head){
        let parent = head;
        let node = head.next;
        
        let target, temp;
        while(node){
            target = dumb;
            // target.next means its child
            while(target !== parent && node.val >= target.next.val){
                target = target.next;
            }
            // console.log(node.val, target.val);
            if(node.val < target.next.val){
                temp = target.next;
                target.next = new ListNode(node.val);
                target.next.next = temp;    
                // re-link parent to real next
                parent.next = node.next;
            }else{
                parent = node;
            }
            node = node.next;
        }
    }
    return dumb.next;
};
