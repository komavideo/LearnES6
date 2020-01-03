function* myGenerator() {
	yield '一';
	yield '条';
	yield '大';
	yield '河';
}

for(let val of myGenerator()){
	console.log('str:', val);
}

function* countdown(begin){
	while(begin > 0){
		yield begin--;
	}
}

for(let tmp of countdown(5)){
	console.log(tmp);
}
