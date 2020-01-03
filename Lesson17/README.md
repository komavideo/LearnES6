类继承
======

## 知识点

* ES6面向对象的编程之类继承

## 实战演习

~~~js
class Car {
    constructor(brand){
        this.brand = brand;
    }
    show(){
        console.log(`本台车的品牌是${this.brand}`);
    }
}

class Lexus extends Car {
    constructor(brand, lineup) {
        super(brand);
        this.lineup = lineup;
    }
    getPrice(){
        switch(this.lineup){
            case "RX":
                return 60;
            case "NX":
                return 40;
            default:
                throw new Error("未知车类别");
        }
    }
}

let mycar = new Lexus("Lexus", "RX");
mycar.show();
console.log("价格是：", mycar.getPrice(), "万");
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
