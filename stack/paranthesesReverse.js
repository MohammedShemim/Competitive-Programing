const reverseParentheses = (s) => {
    let stack = [];
    for (const c of s) {
        if (stack.length != 0) {
            if (c == '(') {
                stack.push(c);
            } else if (c == ')') { // if find ")", collect popping chars until the stack peek/end is "(", then pop out "(" also, add the collected stuff (tmp, which is the reversed string) to the stack
                let tmp = [];
                while (true) {
                    let end = stack[stack.length - 1];
                    if (end == '(') { 
                        stack.pop();
                        stack = stack.concat(tmp);
                        break;
                    } else {
                        tmp.push(end);
                        stack.pop();
                    }
                }
            } else {
                stack.push(c);
            }
        } else {
            stack.push(c);
        }
    }
    return stack.join("");
};
