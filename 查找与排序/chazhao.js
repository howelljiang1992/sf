/**
 * 
 * 二分查找
 * 说明：元素必须是有序的，如果是无序的则要先进行排序操作。
 * 基本思想：
 * 也称为是折半查找，属于有序查找算法。
 * 选定这批数中居中位置的一个数 与所查数进行比较, 看是否为所找之数, 
 * 若不是,利用数据的有序性,可以决定所找的数是在选定前还是在之后, 从而很快可以将查找范围缩小一半. 
 * 以同样的方法在选定的区域进行查找,每次都会将查找范围缩小一半,从而可以快速的找到所查找之数.
 * 
 * 复杂度分析：最坏情况下，关键词比较次数为log2(n+1)，且期望时间复杂度为O(log2n)；
 */

 // 递归实现
function binarySearch(target, arr, start, end) {
    
    let start = start || 0;
    let end = end || arr.length -1;

    let mid = Math.floor((start + end)/2);

    if (arr[mid] === target) {
       return mid;
    }

    if (target > arr[mid]) {
       return binarySearch(target, arr, mid +1, end);
    }else {
       return binarySearch(target, arr, start, mid -1);
    }

    return -1;
}

// 非递归实现
function binarySearch2(arr, target) {
   
    let start = 0;
    let end = arr.length -1;

    while(start <= end) {
      let mid = parseInt(start + (end - start)/2);

      if (target === arr[mid]) {
        return mid
      } else if (target > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid -1;
      }
    }

    return -1;
}


/**
* 
* 顺序查找
* 说明：顺序查找适合于存储结构为顺序存储或链接存储的线性表。
* 基本思想：
* 顺序查找也称为线形查找，属于无序查找算法。
* 从数据结构线形表的一端开始，顺序扫描，
* 依次将扫描到的结点关键字与给定值k相比较，若相等则表示查找成功；
* 若扫描结束仍没有找到关键字等于k的结点，表示查找失败。
* 
　当查找不成功时，需要n+1次比较，时间复杂度为O(n);
　所以，顺序查找的时间复杂度为O(n)
*/

function seqSearch(arr, data) {

    let returnIndex = -1;
    let max = arr[0];
    let min = arr[0];

    arr.forEach((cur, index) => {
        if (cur === data) {
           returnIndex = index;
        }

        if (cur > max) {
           max = cur
        }

        if (cur < min) {
           min = cur
        }
    });

    return {
       index: returnIndex,
       max:max,
       min: min
    }
}
let arr = [4, 5, 7, 1, 8, 19];
seqSearch(arr, 8);

/**
* 
* 分块查找:  分块查找又称索引顺序查找，它是顺序查找的一种改进方法。
* 基本思想：将n个数据元素"按块有序"划分为m块（m ≤ n）。每一块中的结点不必有序，但块与块之间必须"按块有序"；
   即第1块中任一元素的关键字都必须小于第2块中任一元素的关键字；而第2块中任一元素又都必须小于第3块中的任一元素，……
* 算法流程：
  　step1 先选取各块中的最大关键字构成一个索引表；
　　step2 查找分两个部分：先对索引表进行二分查找或顺序查找，以确定待查记录在哪一块中；然后，在已确定的块中用顺序法进行查找。
* 
*/

function fenkuai() {

}


