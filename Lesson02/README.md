let命令
=======

## 知识点

* 用let命令限定作用域

## 实战演习

### 变量i的作用域

~~~js
//ES5
if (true) {
    var i = 1;
}
console.log(i);

//ES6
if (true) {
    let i = 1;
}
console.log(i); //变量i未找到
~~~

### 重复定义

~~~js
var i = 0;
switch (i) {
  case 0:
    let value = "helo";
    break;
  case 1:
    let value = "world"; //重复定义错误
    break;
}
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
