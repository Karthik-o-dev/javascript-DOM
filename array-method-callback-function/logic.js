const employees = [
    { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
    { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
    { name: "Charlie", age: 35, salary: 65000, department: "Engineering" },
    { name: "David", age: 50, salary: 90000, department: "Management" },
    { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
    { name: "Frank", age: 40, salary: 75000, department: "Finance" },
    { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac", age: 38, salary: 68000, department: "HR" },
    { name: "Jack", age: 42, salary: 72000, department: "Finance" },
    { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leo", age: 33, salary: 58000, department: "HR" },
    { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nina", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver", age: 36, salary: 73000, department: "Management" }
];

const result_1 = employees.map(function (element) {
    return element.name.toUpperCase()
})

console.log(result_1)

const res_2 = employees.filter((element) => {
    if (element.salary > 60000) {
        return element
    }
})
console.log(res_2)

const res_3 = employees.reduce((total, element) => {
    return total + element.salary;
}, 0)
console.log("Total salary = " + res_3)

// question 4

const res_4 = employees.filter((element) => {
    return element.department == "Marketing"
})

const marketingsum = res_4.reduce((total, element) => {
    return total + element.salary
}, 0)

const averageMarket = marketingsum / res_4.length;
console.log(averageMarket);

// qs5

const res_5 = employees.map((element) => {
    return element.name;
})
console.log(res_5)

// qs6

const res_6 = employees.map((element) => {
    return element.age + 5;
})
console.log(res_6);

// qs7

const res_7 = employees.map((element) => {
    return {
        department: element.department,
        salary: element.salary
    }
})
console.log(res_7)

// qs8

const res_8 = employees.filter(employee => employee.age > 35)
console.log(res_8)

// qs9

const res_9 = employees.filter(employee => employee.department == "Engineering")
console.log(res_9)

// qs10

const res_10 = employees.reduce((highest, employee) => {
    if (employee.salary > highest) {
        return employee.salary;
    } else {
        return highest
    }
}, 0)
console.log(res_10)

// qs11

let res_11 = 0
employees.forEach((employee) => {
    return res_11++
})
console.log(res_11)

// qs12

const res_12 = employees.filter((employee) => {
    return employee.salary > 70000
})
const name12 = res_12.map(employee => employee.name)
console.log(name12)

// qs13

const res_13 = employees.filter(employee => employee.age < 30).map(employee => ({ name: employee.name, department: employee.department }))
console.log(res_13)

// qs14

const res_14 = employees

    .filter(employee => employee.department == "Finance")
    .reduce((total, employee) => total + employee.salary, 0)
console.log(res_14)

// qs15

const res_15 = employees.filter(employee => employee.department == "Engineering")
const sum = res_15.reduce((total, employee) => total + employee.age, 0)
const averageAge = sum / res_15.length
console.log(averageAge)

// qs16

const res_16 = employees.filter(employee => employee.department == "Marketing" || employee.department == "HR").map(employee => employee.name)
console.log(res_16)

// qs17

const res_17 = employees.filter(employee => employee.department != "Management").map(employee => employee.salary)
console.log(res_17)

// qs18

const res_18 = employees.reduce((total, employee) => total + employee.age, 0)
console.log(res_18)

const res_19 = employees.filter(employee => employee.salary >= 60000 && employee.salary <= 80000).map(employee => employee.name)
console.log(res_19)

// qs20
const totalSum = employees.reduce((total, employee) => total + employee.salary, 0)
const average = totalSum / res_11
console.log(average)

const res_20 = employees.filter(employee => employee.salary > average).length
console.log(res_20)