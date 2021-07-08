/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行(前沿触发)，false 表非立即执行（后沿触发）
 */

function debounce(func, wait, immediate) {
    let timeout;

    return function() {
        let context = this;
        let args = arguments;

        if (timeout) clearTimeout(timeout);

        if (immediate) {
            var callNow = !timeout; // 定时器不存在

            timeout = setTimeout(() => {
                timeout = null;
                func.call(context, ...args);
            }, wait);

            if (callNow) func.call(context, ...args);
        } else {
            timeout = setTimeout(() => {
                func.call(context, ...args);
            }, wait);
        }
    };
}

function test() {
    console.log("测试");
}
window.addEventListener("click", debounce(test, 2000, true));

/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版（前置触发），2 表定时器版（后置触发）
 */
function throttle(func, wait, type) {
    if (type == 1) {
        var previouse = 0;
    } else {
        var timeout;
    }

    return function() {
        let context = this;
        let args = arguments;
        if (type == 1) {
            let now = new Date();
            if (now - previouse > wait) {
                func.call(context, ...args);
                previouse = now;
            }
        } else {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.call(context, ...args);
                }, wait);
            }
        }
    };
}

function test() {
    console.log("测试");
}
window.addEventListener("click", throttle(test, 2000, 2));