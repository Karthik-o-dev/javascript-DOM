// localStorage

localStorage.setItem("Name", "karthik");
localStorage.setItem("Age", 22);

localStorage.clear();

const name = localStorage.getItem("Name")
console.log(name)

localStorage.removeItem("Age")

const age = localStorage.getItem("Age")
console.log(age)

// sessionStorage


sessionStorage.setItem("Name", "karthik")

// sessionStorage.clear();

// sessionStorage.removeItem("Name")

const Name = sessionStorage.getItem("Name")



console.log(Name)

// JSON.stringify()

let student = {
    name: "Rahul",
    age: 22,
    course: "MERN"
};

let data = JSON.stringify(student)
localStorage.setItem("student", data)
const std = localStorage.getItem("student")
console.log(std)

// JSON.parse()

let object = JSON.parse(std)
console.log(object)

// storing an Array

let fruits = ["Apple", "Mango", "Orange"];
localStorage.setItem("fruits", JSON.stringify(fruits))

const fruit = localStorage.getItem("fruits", fruits)
console.log(fruit)

const frt = JSON.parse(fruit);
console.log(frt)




