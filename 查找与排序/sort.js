
/***
 * 一、冒泡排序
 * 原理：依次比较前后两个数的大小，如果前面的比后面的大，则调换位置，一轮后，最后一个数则是最大的。
 * 重复执行第一步操作
 */
function maoPaoSort(arr) {

    let max = arr.length - 1;
    for (let i = 0; i < max; i++) {

        let flag = true;
        for (let j = 0; j < max - i; j++) {

            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                flag = false
            }
        }

        if (flag) break;
    }

    return arr;
}
maoPaoSort([1, 4, 17, 21, 9, 6, 99]);


/***
* 二、快速排序
* 原理：
* 1、先找个基准(通常是中间的数)
* 2、遍历数组，对于小于基准的数放在基准左边，大于基准的数放在基准右边
* 3、递归调用前两个步骤
*/

function quickSort(arr) {
    
    if (arr.length <= 1) {
       return arr
    }
    
    let poitIndex = Math.floor(arr.length/ 2);
    let poit = arr.splice(poitIndex, 1)[0];

    let left = [];
    let right = [];

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] < poit) {
            left.push(arr[i])
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([poit], quickSort(right));
}
quickSort([1, 4, 17, 21, 9, 6, 99]);

/*快速排序最优的情况就是每一次取到的元素都刚好平分整个数组(很显然我上面的不是)；
  快速排序最优的情况下时间复杂度为：O( nlogn )
*/


/***
* 三、堆排序
* 原理：
* 1、先找个基准
* 2、遍历数组，对于小于基准的数放在基准左边，大于基准的数放在基准右边
* 3、递归调用前两个步骤
*/

