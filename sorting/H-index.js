/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let result = 0;
    let length = citations.length;
    citations.sort((a,b)=>a-b);
    if (length < citations[0]) {
        return length;
    }
    for (let i=0; i<length; i++) {
        if (citations[i] <= length - i) {
            result = Math.max(result, citations[i]);
        } else {
            result = Math.max(result, length - i);
            return result;
        }
    }
    return result;
};
