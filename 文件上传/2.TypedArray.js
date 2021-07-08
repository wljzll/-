/**
 * TypedArray对象描述了一个底层的二进制数据缓冲区(binary data buffer)的一个类数组视图(view)
 * 1) 但它本身不可以被实例化，甚至无法访问，你可以把它理解为接口，它有很多的实现
 */
// Int8Array   表示数组中每个子项能存储1个字节8个位
// Int16Array  表示数组中每个子项能存储2个字节16个位
let buffer = new ArrayBuffer(8);
console.log(buffer);
console.log(buffer.byteLength);

const int8Array = new Int8Array(buffer);
console.log(int8Array); // [0, 0, 0, 0,0, 0, 0, 0]
let int16Array = new Int16Array(buffer);
console.log(int16Array); // [ 0, 0, 0, 0 ]

console.log(int8Array.buffer); // 可以转回 ArrayBuffer
console.log(int16Array.buffer); // 可以转回 ArrayBuffer
console.log(buffer);