模版的延长线
===========

## 知识点

* 活用字符串模版

## 实战演习

### 标准的模版使用

~~~js
let name = "Koma"
let address = "网吧"
let mystr = `你好，${name}！
晚上一起去${address}玩吗？
等你的回信。`
console.log(mystr)
~~~

### 扩展文字模版

~~~js
let fmtstr = markdown`你好，${name}！
晚上一起去${address}玩吗？
等你的回信。`
console.log(fmtstr)

function markdown(formats, ...args){
  console.log(formats)
  console.log(args)
  var result = "# 信息标题\n";
  for(var i = 0; i < formats.length; i++)
    result += formats[i] + "**" + (args[i] || '') + "**";
  return result;
}
~~~

## 课程文件

https://gitee.com/komavideo/LearnES6

## 小马视频频道

http://komavideo.com
