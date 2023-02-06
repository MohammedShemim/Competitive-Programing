var reverseList = function(head) {
    if(head === null) return head;
    let arr = [];
    while (head) {
        arr.push(head)
        head = head.next;
    }    
    arr[0].next = null;
    for (let i = 1; i < arr.length; i++) {
        arr[i].next = arr[i-1]
    }
    return arr[arr.length-1];
};
