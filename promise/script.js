const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error after 5 seconds")
    }, 5000)
})

promise.then((sucessRes) => {
    console.log(sucessRes)
}).catch((errorRes) => {
    console.log(errorRes)
}).finally(() => {
    console.log("mission commpleted")
})

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(" error after 5 seconds")
    }, 3000)
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(" after 6 seconds")
    }, 6000)
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("error after 5 seconds")
    }, 4000)
})

// all

const allPromise = Promise.all([promise1, promise2, promise3]).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})

// race

const racePromise = Promise.race([promise1, promise2, promise3]).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})

// any

const anyPromise = Promise.any([promise1, promise2, promise3]).then((res) => {
    console.log(res)
}).catch((error) => {
    console.log(error)
})


Promise.resolve(20).then((value) => {
    console.log(value)
    return value * 2
}).then((value) => {
    console.log(value)
    return value + 5
}).then((event) => {
    console.log(event)
})


