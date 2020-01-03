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

let mycar = new Lexus("Lexus", "LS");
mycar.show();
console.log("价格是：", mycar.getPrice(), "万");