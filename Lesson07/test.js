let str1 = String("HeloWorld");
let str2 = String("HeloWorld");
// console.log(str1 == str2);  //结果：true
// console.log(str1 === str2); //结果：true

let s1 = Symbol("mySymbol");
let s2 = Symbol("mySymbol");
console.log(typeof s1);     //结果：symbol
console.log(s1.toString()); //结果：Symbol(mySymbol)
console.log(s1 == s2);      //结果：false
console.log(s1 === s2);     //结果：false
