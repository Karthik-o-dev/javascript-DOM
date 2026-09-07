// // getElementById

// const element = document.getElementById("demo");

// element.innerText = "Hey";
// console.log(element.innerHTML)

// console.log(element.style.backgroundColor = "green");

// const changeColor = () => {
//     element.style.color = " white";
//     element.style.padding = "40px";

// }



// // getElmentBYClassName

// const class1 = document.getElementsByClassName("demo_1");
// console.log(class1[1].innerText)
// class1[0].style.backgroundColor = "grey"

// for (i = 0; i < class1.length; i++) {
//     class1[i].style.fontSize = "40px"
// }


// // getElementByTagName

// const tag = document.getElementsByTagName("h1");
// for (i = 0; i < tag.length; i++) {
//     tag[i].style.backgroundColor = "black"
//     tag[i].style.color = "white"
// }

// querySelector()

const element = document.querySelector("#demo");
const element1 = document.querySelector("#demo-1");
const changeColor = () => {
    element.style.backgroundColor = " red ";
    element1.style.backgroundColor = " brown ";
}

const box = document.querySelectorAll(".demo_1")
box[0].style.backgroundColor = "black"

// classList()


