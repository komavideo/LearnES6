箭头函数(Arrow Function)
=======

## 知识点

* 通过箭头函数简化代码

## 实战演习

~~~js
let list = [10, 20, 30];

//ES5
let newlist = list.map(function(value, index){
    return value * value;
});
console.log(newlist);

//ES6
newlist = list.map((value, index) => {
    return value * value;
});
console.log(newlist);

newlist = list.map(value => {
    return value * value;
});
console.log(newlist);
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
