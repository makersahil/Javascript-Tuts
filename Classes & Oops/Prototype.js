// let myName = "sahil     "
// let mychannel = "sahil     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.sahil = function(){
    console.log(`sahil is present in all objects`);
}

Array.prototype.heysahil = function(){
    console.log(`sahil says hello`);
}

// heroPower.sahil()
// myHeros.sahil()
// myHeros.heysahil()
// heroPower.heysahil()

// inheritance

const User = {
    name: "sahil",
    email: "sahil@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "sahilAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"sahil".trueLength()
"iceTea".trueLength()