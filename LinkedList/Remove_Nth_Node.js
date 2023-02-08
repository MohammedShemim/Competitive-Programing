var removeNthFromEnd = function(head, n) {
  let headNode = head;
  let nodes = [];
  while (headNode.next !== null) {
    nodes.push(headNode);
    headNode = headNode.next;
  }
  nodes.push(headNode);
  if (nodes.length === 1 && n === 1) {
    return null;
  }
  const removedNodeIndex = nodes.length - n;
  if (removedNodeIndex === 0) {
    return nodes[1];
  } else if (removedNodeIndex === nodes.length - 1) {
    nodes[nodes.length - 2].next = null;
  } else {
    nodes[removedNodeIndex - 1].next = nodes[removedNodeIndex + 1];
  }
  return nodes[0];
};
