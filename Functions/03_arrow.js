const user = {
    username: "sahil",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function sahil(){
//     let username = "sahil"
//     console.log(this.username);
// }

// sahil()

// const sahil = function () {
//     let username = "sahil"
//     console.log(this.username);
// }

const sahil =  () => {
    let username = "sahil"
    console.log(this);
}


// sahil()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "sahil"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()