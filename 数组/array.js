
/**
 * 电话号码的组合  （公式运算）
 * 卡牌分组       （归类运算）
 * 种花问题       （筛选运算）
 * 格雷编码       （二进制运算）
 */

/**
 * 一、电话号码的字母组合 17
 * 
 */ 

 /**
 * 二、数组去重
 * 
 */

 function unique(arr) {
    let hashTable = {};
    let res = [];
    for(let item of arr) {
       if (!hashTable[item]) {
          hashTable[item] = true
          res.push(item);
       }
    }
    return res
 }

 function unique2(arr) {
    let res = [];
    for(let item of arr) {
       if (res.indexOf(item) === -1) {
           res.push(item)
       }
    }
    return res;
 }

