let stack1 = [];
let stack2 = [];

function push(node)
{
    stack1.push(node);
}

function pop()
{
    if(stack1.length === 0) {
        return null;
    }

    while(stack1.length !== 0) {
        stack2.push(stack1.pop());
    }
    let result = stack2.pop();
    
    while(stack2.length !== 0) {
        stack1.push(stack2.pop());
    }
    
    return result;
}