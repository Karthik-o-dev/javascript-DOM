const display = (value, other) => {
    console.log("the number is" + value)
    other();

}

const another = () => {
    console.log("another");
}

display(10, another);


// -----------------------------

function greet(name, age) {
    console.log("My name is " + name)
    age();
}

greet("karthik", function () {
    console.log("My is 30")
})

// ****************

const loop = (arr = [], callback) => {
    for (i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr)
    }

}

const handleLoop = (element, index, array) => {
    console.log(element, index, array);
}

const arr = [1, 2, 3, 4, 5, 6];
loop(arr, handleLoop);

// ********************

const dis = (res) => {
    console.log(res)
}

const getArea = (l, b, callback) => {
    const a = l * b;
    callback(a, 20, dis)

}

const getvol = (area, h, callback) => {
    const v = area * h;
    callback(v)
}

getArea(10, 20, getvol)