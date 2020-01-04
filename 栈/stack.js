
/**
 * 栈：先进后出
 * 栈内的元素只能通过列表的一端访问，称为栈顶
 * 数据只能在栈顶添加或删除，遵循 先入后出
 * 
 */

function Stack() {
    this.dataStore = []; // 初始化为空
    this.top = 0;        // 记录栈顶位置
    // this.length = length; // 栈内总元素个数
    // this.pop = pop;      // 出站
    // this.push = push;    // 入栈
    // this.peek = peek;    // 查看栈顶元素
    // this.clear = clear;   // 清空栈

    // 向栈中添加新元素
    Stack.prototype.push = function (element) {
        this.dataStore[this.top++] = element;
    };

    // 出栈
    Stack.prototype.pop = function () {
        return this.dataStore[--this.top]
    }

    // 查看栈顶元素
    Stack.prototype.peek = function () {
        if (this.top > 0) return this.dataStore[this.top - 1];
        else return 'Empty';
    }

    // 返回栈内元素总和
    Stack.prototype.getLength = function () {
        return this.top;
    }

    // 清空栈
    Stack.prototype.clear = function () {
        this.dataStore = [];
        this.top = 0;
    }
}

function testStack() {
    let stack = new Stack();
    stack.push('Apple');
    stack.push('Banana');
    stack.push('Pear');

    // 查看当前栈顶元素
    console.log(stack.peek());    // Pear
    console.log(stack.pop());     // Pear 

    console.log(stack.peek());     // Banana
    console.log(stack);
}

testStack();




