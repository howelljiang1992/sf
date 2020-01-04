/**
 * 队列：先进先出
 * 只能在队尾添加元素，只能在队首删除元素
 * 
 */

function Queue() {
    this.dataStore = [];
    // this.enqueue = enqueue;     //入队
    // this.dequeue = dequeue;     //出队
    // this.front = front;         //查看队首元素
    // this.back = back;           //查看队尾元素
    // this.toString = toString;   //显示队列所有元素
    // this.clear = clear;         //清空当前队列
    // this.empty = empty;         //判断当前队列是否为空

    // 向队列末尾添加一个元素，直接调用 push 方法即可
    Queue.prototype.enqueue = function (element) {
        this.dataStore.push(element);
    }

    //删除队列首的元素，可以利用 JS 数组中的 shift 方法
    Queue.prototype.dequeue = function () {
        if (this.empty()) return 'This queue is empty';
        else this.dataStore.shift();
    }

    //我们通过判断 dataStore 的长度就可知道队列是否为空
    Queue.prototype.empty = function (element) {
        if (this.dataStore.length == 0) return true;
        else return false;
    }

    // 查看队首元素
    Queue.prototype.front = function (element) {
        if (this.empty()) return 'This queue is empty';
        else return this.dataStore[0]
    }

    // 查看队尾元素
    Queue.prototype.back = function () {
        if (this.empty()) return 'This queue is empty';
        else return this.dataStore[this.dataStore.length - 1];
    }

    // 查看队列所有元素，我这里采用数组的 join 方法实现
    Queue.prototype.toString = function () {
        return this.dataStore.join('\n');
    }

    // 清空队列
    Queue.prototype.clear = function () {
        this.dataStor = [];
    }

}

function testQueue() {
    var queue = new Queue();

    console.log(queue.empty());       //true

    //添加几个元素
    queue.enqueue('Apple');
    queue.enqueue('Banana');
    queue.enqueue('Pear');

    console.log(queue.empty());       // false


    //查看队首元素
    console.log(queue.front());  // Apple
    //查看队尾元素  
    console.log(queue.back());   // Pear

    //出队
    queue.dequeue();

    //查看队首元素
    console.log(queue.front());  // Banana
    //查看队尾元素  
    console.log(queue.back());   // Pear
}

testQueue();



/**
 * 用单向链表实现队列
 * 
 */
