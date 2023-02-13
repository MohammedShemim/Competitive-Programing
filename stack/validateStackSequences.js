/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let arr = [];
    let pushItr = 0;
    let popItr = 0;

    while (pushItr < pushed.length) {
        arr.push(pushed[pushItr]);

        let last = arr[arr.length - 1];
        while (last === popped[popItr]) {
            arr.pop();
            popItr++;
            last = arr[arr.length-1];

            if(arr.length == 0) {break}
        }
        pushItr++;
    }

    while (arr.length) {
        let last = arr[arr.length - 1];
        if (last === popped[popItr]) {
            arr.pop();
            popItr++;
        }
        else { break }
    }

    if (arr.length === 0) { return true }
    return false;

};
