class Element {
    constructor(name) {
        this.stdName = name;
    }

    display() {
        console.log("hai")
    }
}

class StudentCalicut extends Element {
    constructor(name, age) {
        super(name);
        this.stdName = name;
        this.age = age;
    }

    display() {
        console.log("invoked")
    }

    parentDisplay() {
        super.display();
    }
}

const element = new StudentCalicut("karthik", 30)
console.log(element.stdName)

element.display();
element.parentDisplay();