

/**
 * 
 * 一、链表
 * 
 */

// 节点
function Node(element) {
    this.element = element;   //当前节点的元素
    this.next = null;         //下一个节点链接
}

// 链表类
function LList() {
    this.head = new Node('head');          //头节点
    // this.find = find;                   //查找节点
    // this.insert = insert;               //插入节点
    // this.remove = remove;               //删除节点
    // this.findPrev = findPrev;           //查找前一个节点
    // this.display = display;             //显示链表

    // 查找给定节点
    LList.prototype.find = function (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };

    // 插入节点
    LList.prototype.insert = function (newElement, item) {
        var newNode = new Node(newElement);
        var currNode = this.find(item);
        newNode.next = currNode.next;
        currNode.next = newNode;
    };

    // 删除节点
    LList.prototype.remove = function (item) {

    };

    // 查找上一个节点
    LList.prototype.findPrev = function () {

    };

    // 显示链表
    LList.prototype.display = function () {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };
}

function testLList() {
    var fruits = new LList();

    fruits.insert('Apple', 'head');
    fruits.insert('Banana', 'Apple');
    fruits.insert('Pear', 'Banana');

    console.log(fruits.display());       // Apple
    // Banana
    // Pear
}

testLList();


/**
 * 链表翻转
 */


function mergeArray(arr1, arr2) {

    let arr = [];
    arr1.forEach(item => {
        if (arr2.indexOf(item) > -1) {
            arr.push(item);
        }
    });

    return arr;

}
mergeArray([1, 2, 2, 1], [2, 2])


function test(num) {

    let numStr = num.toString();

    let numArr = numStr.split('');

    return numArr.reverse().join('');
}
test(1234)


function test(num) {

    let numArr = Array.isArray(num) ? num: num.toString().split('');
    
    if (numArr.length <= 1) {
       return numArr[0]
    }
    return numArr.pop() + test(numArr);
}

test(12345);


