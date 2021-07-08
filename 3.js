// 函数柯里化就是把接受多个参数的函数变换成接受一个单一参数的函数，
// 并且返回接受余下参数返回结果的技术
// 第一种
// const add = (function(total) {
//     let allArgs = [];

//     function _add(...args) {
//         allArgs = [...allArgs, ...args];
//         if (allArgs.length >= total) {
//             let result = allArgs.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
//             allArgs.length = 0;
//             return result;
//         } else {
//             return _add;
//         }
//     }
//     return _add;
// })(5)

// 第二种
// function add(...args) {
//     let _add = add.bind(null, ...args);
//     _add.toString = function() {
//         return args.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
//     }

//     return _add;
// }

// 第三种 函数柯里化
function curry(fn, ...args) {
    console.log(args, '====');
    return args.length < fn.length ? (...innerArgs) => curry(fn, ...args, ...innerArgs) : fn(...args);
}

function addFn(a, b, c, d, e) {
    return a + b + c + d + e;
}
let add = curry(addFn); // (...innerArgs) => curry(fn, ...args, ...innerArgs)

console.log(add(1, 2, 3, 4, 5)); // innerArgs = [1,2,3,4,5] => 再次执行 curry => args = [1,2,3,4,5] => args.length == fn.length return fn([1,2,3,4,5])

// add(1)(2)(3)(4)(5); 
// (1)innerArgs = [1] 执行 curry  =>  
// (2)args = [1]  args.length < fn.length  => 
// (3)return (...innerArgs) => curry(fn, ...args, ...innerArgs)
// (4)innerArgs = [2]  执行curry()
// (5) args = [1,2] args.length < fn.length
// (6)return (...innerArgs) => curry(fn, ...args, ...innerArgs)
// ......
// 直innerArgs = [5] 时，执行curry()
// args = [1,2,3,4,5] args.length = fn.length
// return fn(...args)

// console.log(add(1, 2)(3, 4, 5));

// add(1)

function curry(fn, ...args) {
    return args.length > fn.length ? () => curry(fn, ...args, ...innerArgs) : fn(...args);
}