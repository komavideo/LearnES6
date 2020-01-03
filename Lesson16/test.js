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
console.log(player);
player.age = 28;
console.log(player);
console.log(player.age);