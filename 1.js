/**
 * +号规则
 * 1、两个操作数如果是number则直接相加出结果。
 * 2、如果其中有一个操作数为string，则将另一个操作数隐式的转换为string，然后进行字符串拼接得出结果。
 * 3、如果操作数为对象或者是数组这种复杂的数据类型，那么就将两个操作数都转换为字符串，进行拼接。
 * 4、如果操作数是像boolean这种的简单数据类型，那么就将操作数转换为number相加得出结果。
 */

// [ ] + { } 因为[]会被强制转换为"", 然后+运算符 链接一个{ }, { }强制转换为字符串就是"[object Object]"
console.log([] + {}) // [object Object]

// { } 当作一个空代码块,+[]是强制将[]转换为number,转换的过程是 +[] => +"" =>0 最终的结果就是0
console.log({} + []) // 0

// {} 被当成代码块
console.log({} + 0) //0

// [] 先转成字符串
console.log([] + 0) //"0"