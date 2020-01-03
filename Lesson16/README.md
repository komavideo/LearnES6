setter/getter的定义
===================

## 知识点

* 在类中定义setter/getter方法

## 实战演习

~~~js
class Player {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    get age(){
        return this._age;
    }
    set age(val){
        this._age = val;
    }
}

let player = new Player("库里", "男");
player.age = 28;
console.log(player);
console.log(player.age);
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
