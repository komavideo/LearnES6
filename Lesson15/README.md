类定义class
==========

## 知识点

* ES6的类定义

## 实战演习

~~~js
class Player {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
    show(){
        console.log(`${this.name}的性别是${this.sex}。`);
    }
    static info(){
        console.log("这是一个球员类，您可以使用它建立自己的球员。");
    }
}

let player = new Player("库里", "男");
console.log(player.name, player.sex);
player.show();

Player.info();
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
