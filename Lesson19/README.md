可迭代的对象
===========

## 知识点

* 制作一个可迭代的对象
* Symbol.iterator

## 实战演习

~~~js
class Player {
	constructor(list){
		this.list = list;
	}
	[Symbol.iterator](){
		let current = 0;
		let that = this;
		return {
			next(){
				return current < that.list.length ? {value:that.list[current++], done:false} : {done:true};
			}
		};
	}
}

let player = new Player(['Curry', 'Harden', 'LeBron']);
for(let tmp of player){
	console.log(tmp);
}
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
