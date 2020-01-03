let list = [10, 20, 30];
Array.prototype.Len = function(){};

for(let val of list)
    console.log(val);

for(let val in list)
    console.log(val, list[val]);
