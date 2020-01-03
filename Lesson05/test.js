let name = "Koma"
let mystr1 = "你好，${name}!"
let mystr2 = `你好，${name}！再见。`

// console.log(mystr1)
// console.log(mystr2)

function tagged(formats, ...args){
    console.log(formats)
    console.log(args)
}

tagged`你好，${name}！再见。`
