

async function api_call() {
    try {
        const fetching = await fetch("https://dummyjson.com/products")
        const fetchProduct = await fetching.json()


        const parent = document.getElementById("parent")

        for (let product of fetchProduct.products) {
            const child = document.createElement("div")
            child.className = "child"

            const img = document.createElement("img")
            img.src = product.thumbnail
            img.alt = product.title;;

            const title = document.createElement("h2")
            title.innerHTML = product.title



            child.appendChild(img)
            child.appendChild(title)

            parent.appendChild(child)
        }

        console.log(fetchProduct)
    } catch (error) {
        console.log(error.message)
    } finally {
        console.log("cpmpleted")
    }
}
api_call()