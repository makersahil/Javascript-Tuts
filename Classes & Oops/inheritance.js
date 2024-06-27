class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const sahil = new Teacher("sahil", "sahil@teacher.com", "123")

sahil.logMe()
const masalasahil = new User("masalasahil")

masalasahil.logMe()

console.log(sahil instanceof User);