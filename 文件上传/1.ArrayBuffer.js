/**
 * 1) ArrayBuffer对象用来表示通用的、固定长度的原始二进制数据缓冲区
 * 2) 它是一个字节数组，通常在其他语言中称为 byte array
 * 3) 在前端，你不能直接操作 ArrayBuffer的内容，而是要通过 类型数组对象 或 DataView 对象来操作，
 *    它们会将缓冲区中的数据表示为特定的格式，并通过这些这个来读写缓冲区的内容
 */


let buffer = new ArrayBuffer(8); // 创建一个ArrayBuffer 长度为8个字节
console.log(buffer.byteLength); // 8个字节 * 8个位 = 64位
console.log(buffer);