// 第一版
// ~(function(prototype) {
//     function bind(context, ...outerArgs) {
//         return (...innerArgs) => {
//             return this.call(context, ...outerArgs, ...innerArgs);
//         }
//     }
//     prototype.bind = bind;
// })(Function.prototype)

// // 第二版
// ~(function(prototype) {
//     function bind(context, ...outerArgs) {
//         let funConext = this;
//         return function(...innerArgs) {
//             return funConext.call(context, ...outerArgs, ...innerArgs);
//         }
//     }
//     prototype.bind = bind;
// })(Function.prototype)

// function sum(...args) {
//     return this.prefix + (args.reduce((previousValue, currentValue) => previousValue + currentValue, 0));
// }

// let obj = { prefix: '$' };
// let bindSum = sum.bind(obj, 1, 2, 3);
// console.log(bindSum(4, 5));

// 第三版
~(function (prototype) {
  Object.create = function (p) {
    function F() {}
    F.prototype = p;
    return new F();
  };
  /**
   *
   * @param {*} OThis 调用bind时传入的原始this
   * @param  {...any} outerArgs
   */
  prototype.bind = function (OThis, ...outerArgs) {
    let thatFunc = this; // 缓存当前的函数 Point 谁调用的bind this就是谁，所以说是函数本身
    let fBound = function (...innerArgs) {
      // 在这里要判断这个函数时通过new 来调用的还是直接调用的
      return thatFunc.apply(
        // 当通过new 调用fBound时，this就应该是新实例 ，当做普通函数调用时，this就应该是原来要绑定的OThsi
        this instanceof thatFunc ? this : OThis,
        [...outerArgs, ...innerArgs]
      );
    };
    // 将fBound的prototype指向原函数的原型
    fBound.prototype = Object.create(thatFunc.prototype);
    return fBound;
  };
})(Function.prototype);

function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return this.x + "," + this.y;
};

let emptyObj = {};
let YPoint = Point.bind(null, 1); // 返回 fBound
/**
 * YPoint（fBound）有两种调用方式
 * 1、当做构造函数通过new 调用
 * 2、当做普通函数调用
 */

let axiosPoint = new YPoint(2); // 相当于调用 fBound
console.log(axiosPoint.toString());
console.log(axiosPoint instanceof Point);
console.log(axiosPoint instanceof YPoint);

// let obj = {};

// function fn() {
//     console.log(this)
// }
// fn.bind().bind(obj);

// let ft = (...innerArgs) => {
//     context === window
//     return this.call(context, ...outerArgs, ...innerArgs);
// }

// ft.bind(obj)


// call
~function () {
    /**
     * 
     * @param {*} context : call的第一个参数，将调用call方法的函数中的this
     * 指向context 
     */
    function call(context) {
        // 如果未给call方法传递this指向的函数，默认指向window
        context = context || window
        let argus = [],
            result;
        // 参数的第二项才是函数的参数
        for (let i = 1; i < arguments.length; i++) {
            argus.push(arguments[i]);
        }
        context.$fn = this;
        result = context.$fn(...argus);
        delete context.$fn;

    }
    // 扩展到内置类的原型上
    Function.prototype.call = call;
}()