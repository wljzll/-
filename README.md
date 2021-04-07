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

`
1)初始化参数：从配置文件和Shell语句中读取并合并参数,得出最终的配置对象
2)用上一步得到的参数初始化Compiler对象
3)加载所有配置的插件
4)执行对象的run方法开始执行编译
5)根据配置中的entry找出入口文件
6)从入口文件出发,调用所有配置的Loader对模块进行编译
7)再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理
8)根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk
9)再把每个Chunk转换成一个单独的文件加入到输出列表
10)在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统
`
