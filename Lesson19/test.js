class Player {
	constructor(list){
		this.list = list;
	}
	[Symbol.iterator](){
		let current = 0;
		let that = this;
		return {
			next(){
				return current < that.list.length ? {value:that.list[current++], done:false} : {done:true};
			}
		};
	}
}

let player = new Player(['Curry', 'Harden', 'LeBron']);
for(let tmp of player){
	console.log('name:',tmp);
}