// https://leetcode.com/problems/delete-node-in-a-linked-list/

var deleteNode = function (node) {
    let next = node.next
    let nextNext = next.next
    node.val = next.val
    node.next = nextNext
};