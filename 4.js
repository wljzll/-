// 反柯里化

Function.prototype.uncurring = function() {
    var self = this; // this代表当前函数
    return function() {
        console.log(arguments)
        let obj = Array.prototype.shift.call(arguments);
        // console.log(obj)
        return self.apply(obj, arguments);
    }
}

// push是返回的函数
let push = Array.prototype.push.uncurring();
(function() {
    // 这个arguments是自执行函数的
    push(arguments, 4, 5);
    // console.log(arguments)
})(1, 2, 3)