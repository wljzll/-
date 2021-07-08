/**
 * insert: 实现冒泡排序
 * @param {Array} ary 需要排序的数组
 * 
 * @returns 排序后的新数组
 */
function insert(ary) {
    // 创建一个新数组 用来储存抓到手里的拍，开始先抓一张牌进来
    let handle = [];
    handle.push(ary[0]);
    // 2.从第二项开始一次抓牌 一直到把台面上的牌抓光
    for (let i = 1; i < ary.length; i++) {
        // 新抓的牌
        let aryItem = ary[i];
        // 和手里的牌一次比较（从后向前比）
        for (let j = handle.length; j >= 0 ; j--) {
            // 每一次要比较的手里的牌
            let handleItem  = handle[j];
            if(aryItem > handleItem) {
               handle.splice(j + 1, 0, aryItem);
               break;
            } 
            // 如果已经比到第一项了
            if(j === 0) {
               handle.unshift(aryItem);
            }
        }
    }
    return handle;
}

console.log(insert([11, 16, 8, 24, 1, 16]));