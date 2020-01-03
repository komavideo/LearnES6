函数的默认值
===========

## 知识点

* 定义函数时给出参数的默认值

## 实战演习

~~~js
//字符参数
function sayHelo(name = "Curry"){
    console.log(`Helo ${name}`);
}
sayHelo();
sayHelo("Koma");

//数值计算
function add(a=1, b=a){
    return a+b;
}
console.log(add());
console.log(add(10));
console.log(add(10, 20));

//必须指定参数
function required(){
    throw new Error("参数未制定");
}
function sayBye(name=required()){
    console.log(`${name} bye!`);
}
sayBye('Koma');
//sayBye();
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
