/**
 * 1) DataView视图是要给可以从二进制ArrayBuffer对象中读写多种数值类型的底层接口
 * 
 * 2) setInt8() 从DataView起始位置以byte为技数的指定偏移量(byteOffset)处储存一个8-bit数(一个字节)
 * 
 * 3) getInt8() 从DataView起始位置以byte为计数的指定偏移量(byteOffset)处获取一个8-bit数(一个字节)
 */

 let buffer = new ArrayBuffer(2);
 console.log(buffer);
 console.log(buffer.byteLength);

 let dataView = new DataView(buffer);

 dataView.setInt8(0, 1); // 第一个参数是指偏移的字节数，第二个参数是指设置的值
 dataView.setInt8(1, 2);
 console.log(dataView.getInt8(0)); // 1 获取第一个字节的值
 console.log(dataView.getInt8(1)); // 2 获取第二个字节的值
 console.log(dataView.getInt16(0)); // 258 将dataView看作16位表示一个值，获取16个位，2个字节的值
 console.log(dataView.buffer); // 可以转回 ArrayBuffer