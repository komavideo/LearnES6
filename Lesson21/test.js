class MyList {
	constructor(list){
		this.list = list;
		this[Symbol.iterator] = function*(){
			let current = 0;
			let that = this;
			while(current < that.list.length){
				yield that.list[current++];
			}
		}
	}
}

let mylist = new MyList([101, 202, 303, 404, 505]);
for(let val of mylist){
	console.log(val);
}