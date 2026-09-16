const jsonString = '{"name":"karthik","place":"kozikode"}';
const res = JSON.parse(jsonString)
console.log(res)

const toStr = JSON.stringify(res)
console.log(toStr)

// API fetching

const response = fetch("https://randomuser.me/api/")

response.then((response) => {
    return response.json();
}).then((successRes) => {
    console.log(successRes)

    const firstName = successRes.results[0].name.first;
    const p1 = document.createElement("p")
    p1.innerHTML = "Name: " + firstName
    document.body.appendChild(p1)

    const gender = successRes.results[0].gender;
    const p2 = document.createElement("p")
    p2.innerHTML = "Genter: " + gender
    document.body.appendChild(p2)
}).catch((error) => {
    alert(error.message)
}).finally(() => {
    console.log("fetching successfull")
})

// async await

async function api_call() {
    try {
        const apiResponse = await fetch("https://randomuser.me/api/")
        if (!apiResponse.ok) {
            throw new Error("Something error happend")
        }
        const res = await apiResponse.json();
        console.log(res)

        const apiResponse1 = await fetch("https://randomuser.me/api/")
        const res1 = await apiResponse1.json();
        console.log(res1)

        const apiResponse2 = await fetch("https://randomuser.me/api/")
        const res2 = await apiResponse2.json();
        console.log(res2)


    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("completed")
    }
}

api_call();