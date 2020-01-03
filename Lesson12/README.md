可变长参数
=========

## 知识点

* 定义函数时，可以将参数指定为可变数组

## 实战演习

~~~js
function sum(...args) {
    let result = 0;
    args.forEach(val => {
        result += val;
    });
    return result;
}

console.log(sum(1,2,3));
console.log(sum(1,2,3,4,5,6,7,8,9,10));
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
