const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const sahil = {
    name: 'ginger sahil',
    price: 250,
    isAvailable: true,

    ordersahil: function(){
        console.log("sahil nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(sahil, "name"));

Object.defineProperty(sahil, 'name', {
    //writable: false,
    enumerable: true,
    
})

console.log(Object.getOwnPropertyDescriptor(sahil, "name"));

for (let [key, value] of Object.entries(sahil)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}