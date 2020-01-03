Symbol的用法
===========

## 知识点

* 作为常量
* 作为属性
* 半隐藏属性

## 实战演习

### 作为常量

~~~js
const Java = Symbol();
const Ruby = Symbol();
const Perl = Symbol();
const Php  = Symbol();
const VB   = Symbol();

var lang = Php;

if (lang === Java) {
    console.log('Java的未来在哪里？');
}
if (lang === Ruby) {
    console.log('再学个Ruby on Rails吧。');
}
~~~

### 作为属性

~~~js
let s1 = Symbol("mySymbol");
let s2 = Symbol("mySymbol");

var obj = {};
obj[s1] = "helo";
obj[s2] = "world";

console.log(obj);
console.log(obj[s1]);
console.log(obj[s2]);
~~~

### 半隐藏属性

~~~js
const MYKEY = Symbol();
class User {
    constructor(key,name,age){
        this[MYKEY] = key;
        this.name = name;
        this.age = age;
    }
    checkKEY(key){
        return this[MYKEY] === key;
    }
}

let user = new User(123, 'Curry', 29);
console.log(user.name, user.age, user[MYKEY]);
console.log(user.checkKEY(123));   //true
console.log(user.checkKEY(456));   //false
console.log(Object.keys(user));    //[ 'name', 'age' ]
console.log(JSON.stringify(user)); //{"name":"Curry","age":29}
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
