/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const queue = new Queue([...s])
    return decode(queue)
};

var decode = function(queue) {
    var string = ""
    var multiplier = 0
    
    while(!queue.isEmpty()) {
        let c = queue.dequeue()
        if (!isNaN(c)) {
            multiplier = multiplier*10 + parseInt(c)
        } else if (c == '[') {
            const result = decode(queue)
            string += result.repeat(multiplier)
            multiplier = 0
        } else if (c == ']') {
            break;
        } else {
            string += c
        }
    }
    return string
    
}
