简单迭代生成器
=============

## 知识点

* function* {} : 迭代生成器
* yield : 迭代返回

## 实战演习

~~~js
function* myGenerator() {
	yield '一';
	yield '条';
	yield '大';
	yield '河';
}

for(let val of myGenerator()){
	console.log(val);
}

function* countdown(begin){
	while(begin > 0){
		yield begin--;
	}
}

for(let tmp of countdown(5)){
	console.log(tmp);
}
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
