## 1、排序算法
## 2、session、cookie、token
## XMLHttpRequest
## 设计模式
## ES6(set weakset map weakmap promise async await)


> 1、创建Ajax实例：
let xhr = new XMLHttpRequest;
// IE 低版本浏览器用的是 new ActiveXObject();

2、打开URL（配置发送请求的信息）
xhr.open('GET', './json/xxx.json', true);
/**
* 1、参数1：methods，HTTP请求方式；
* 2、参数2：URL，请求地址（API接口地址）;
* 3、参数3：设置同步或异步，默认是true异步，false同步；
* 4、参数4和5：USER-NAME、USER-PASS，传递给服务器的
* 账号和密码；
* 一般不会用到参数4和5；
*/

3、监听Ajax的状态，在状态为X的时候，获取服务器响应的
内容，Ajax状态码有：0、1、2、3、4
xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && /^(2|3)\d{2}/.test(xhr.status)){
       let result = xhr.responseText;
     }
}

4、发送请求：
xhr.send(请求主体内容);
// send中放的是请求主体内容；

一个Ajax任务从SEND后开始，到xhr.readyState等于4的时候算任务结束；