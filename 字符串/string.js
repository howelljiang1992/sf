/**
 * 一、翻转字符串中的单词
 * 给定一个字符串，你需要翻转字符串中每个单词的字符顺序，
 * 同时仍保留空格和单词的初始顺序
 * 示例1：
 * 输入：“Let's take LeetCode contest”
 * 输出："s'teL ekat edoCteeL tsetnoc"
 * 
 * 注意：在字符串中，每个单词由单个空格分割，并且字符串中不会有任何额外的空格
 */

function reverseWords(s = "Let's take LeetCode contest") {

    let arr = s.split(' ').map(item => {
        return item.split('').reverse().join('');
    });

    arr = arr.join(' ');

    console.log('字符串翻转结果', arr);
    return arr
}

reverseWords();


/**
* 一、计数二进制子串 696
* 给定一个字符串 s，计算具有相同数量0和1的非空(连续)子字符串的数量，
* 并且这些子字符串中的所有0和所有1都是组合在一起的。
* 重复出现的子串要计算它们出现的次数。
* 示例1：
输入: "00110011"
输出: 6
解释: 有6个子串具有相同数量的连续1和0：“0011”，“01”，“1100”，“10”，“0011” 和 “01”。

请注意，一些重复出现的子串要计算它们出现的次数。

另外，“00110011”不是有效的子串，因为所有的0（和1）没有组合在一起。

示例 2 :

输入: "10101"
输出: 4
解释: 有4个子串：“10”，“01”，“10”，“01”，它们具有相同数量的连续1和0。
* 
* 注意：
   s.length 在1到50,000之间。
   s 只包含“0”或“1”字符。
*/


// 1块、4块、5块，求总数n块的最小硬币数.
// 1、1、2、3、5、8...计算第n个数的值（斐波那契数列）
// 递归实现
function feibo(n) {
    let result;
    if (n == 1 || n == 2) {
        result = 1
    } else {
        result = feibo(n - 1) + feibo(n - 2)
    }
    return result;
}

let res = feibo(6)
console.log(`第6项：`, res);

// 普通函数实现
function feibo2(n) {
    let a = 1, b = 1, c = 0;
    for (let i = 0; i < n; i++) {
        if (n <= 2) {
            c = 1
        } else {
            a = b;
            b = c;
            c = a + b
        }
    }
    return c
}
let res1 = feibo2(7)
console.log(`第7项：`, res1);


/***
 * 判断一个单词是否是回文
 * 回文是指把相同的词汇或句子，在下文中调换位置或颠倒过来
 * 产生首尾回环的情趣，叫做回文，也叫回环。比如 mamam，redivider
 * 
 */

function testHuiwen(str) {
    return str.split('').reverse().join('') === str
}

function testHuiwen1(num) {
    let numStr = num.toString();
    return numStr.split('').reverse().join('') === numStr
}

function testHuiwen3(str) {

    let strArray = str.split('');
    let length = strArray.length;
    for (let i = 0, j = length - 1; i < j; i++ , j--) {
        if (strArray[i] !== strArray[j]) {
            return false;
        }
    }
    return true
}

/**
 * 统计字符串中出现最多的字符
 */
function findMaxChar(str) {
    let arr = str.split('');
    
    let temp = 0;
    let maxChar = '';
    let hashTable = {};
    for (let item of arr) {
        if (!hashTable[item]) {
            hashTable[item] = 1;
        } else {
            hashTable[item]++
        }
    }

    for (let key in hashTable) {
        if (hashTable[key]> temp) {
            temp = hashTable[key]
            maxChar = key
        }
    }

    return {
        maxChar,
        temp
    };
}

/**
* 
* 删除字符串中重复的字符
*/
function deleteDoubleChar(str) {
    let arr = str.split('');

    let hashTable = {};
    for (let item of arr) {
        if (!hashTable[item]) {
            hashTable[item] = 1;
        }
    }
}


