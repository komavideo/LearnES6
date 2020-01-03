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
sayBye();
