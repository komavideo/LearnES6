let title = "ES6从入门到学会";
let price = 25;
let publish = "小马出版社";

let book = {
    title, price, publish,
    toString(){
        console.log(`<<${this.title}>> is ${price}元。`);
    }
};
book['lang'] = "简体中文";

console.log(book);
book.toString();