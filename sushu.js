/**
 * 查找1-100以内的素数
 * 素数：只能被1和本身整除的数， 最小的素数为2
 */

let flag;
for (i = 2; i < 100; i++) {
    flag = true;

    for (j = 2; j < i; j++) {
        if (i % j === 0) {
            flag = false;
            break;
        }
    }

    if (flag) {
        console.log(i);
    }
}