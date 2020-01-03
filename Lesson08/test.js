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