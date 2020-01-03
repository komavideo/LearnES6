嵌入字符串
=========

## 知识点

* 字符串嵌入方式
* 字符串模版定义

## 实战演习

~~~js
let name = "Koma"
let mystr1 = "你好，${name}!"
let mystr2 = `你好，${name}！再见。`

console.log(mystr1)
console.log(mystr2)

function tagged(formats, ...args){
    console.log(formats)
    console.log(args)
}

tagged`你好，${name}！再见。`
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
