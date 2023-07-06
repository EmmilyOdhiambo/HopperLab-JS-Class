let num = [3,6,8,25,7,5]
console.log(num.length)

let multiples = num.map(item =>item*2);
console.log({multiples});

let triples  = num.forEach(item => item*2)
console.log({triples})


let getSeven = num.find(item => item===7)
console.log({getSeven})

