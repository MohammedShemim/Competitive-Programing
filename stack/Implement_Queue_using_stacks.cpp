class MyQueue {
public:
    stack<int> container1;
    stack<int> container2;
    MyQueue() {
    }
    
    void push(int x) {
        container1.push(x);
    }
    
    int pop() {
        int ret = 0;
        if(!container2.empty()){
            ret = container2.top();
            container2.pop();
            return ret;
        }
        while(!container1.empty()){
            container2.push(container1.top());
            container1.pop();
        }
        ret = container2.top();
        container2.pop();
        return ret;
    }
    
    int peek() {
        if(!container2.empty()){
            return container2.top();
        }
        while(!container1.empty()){
            container2.push(container1.top());
            container1.pop();
        }
        return container2.top();
    }
    
    bool empty() {
        return container1.empty() && container2.empty();
    }
};
