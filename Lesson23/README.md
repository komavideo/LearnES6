类模块设计
=========

## 知识点

* 类模块设计和引用

## 实战演习

### Player.mjs

~~~js
class Player {
	constructor(name){
		this.name = name;
	}
	sayHelo(){
		console.log(`Helo ${this.name}.`);
	}
}

export default Player;
~~~

### main.mjs

~~~js
import Player from './Player';

let curry = new Player('Curry');
curry.sayHelo();
~~~

### 执行方法

~~~bash
node --experimental-modules main.mjs
~~~

## 课程文件

https://github.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
