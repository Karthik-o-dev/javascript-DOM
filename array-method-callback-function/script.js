const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filter = (array = [], callback) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 1) {
            callback(array[i])
        }
    }
}
const res = [];
const handleFilter = (element) => {
    res.push(element);
}

filter(array, handleFilter)
console.log(res)
// array methods

// forEach


array.forEach(function (element, index, arr) {
    console.log(element, index, arr)
});

// find

const resFind = array.find(function (element) {
    if (element == 5) {
        return true;
    }
})

console.log(resFind)

const arr = ["pineapple", "apple", "orange",];

const resFindFruits = arr.find(function (element) {
    if (element.length == 5) {
        return element;
    }
})
console.log(resFindFruits)

// filter

const reFilter = array.filter(function (element, index) {
    if (element % 2 == 0) {
        return true;
    }
})

console.log(reFilter)

// map

const resMap = array.map((element, index) => {
    if (element % 2 == 0) {
        return element / 2;
    }
    return element
})

console.log(resMap)

// reduce

const resREduce = array.reduce((total, element, index, arr) => {
    return total + element;
}, 0);

console.log(resREduce)