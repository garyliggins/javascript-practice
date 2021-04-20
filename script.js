//grabs the button from the dom, and puts in a reusable variable
// const button = document.querySelector('button');

// button.addEventListener('click', () => {
//     console.log('clicked')
// })
// const items = document.querySelectorAll('li')
// title = document.querySelector('h1')
// console.log(title)

// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         // console.log('clicked one cuh')
//         // console.log(e)
//         // console.log(e.target)
//         // item.remove() or
//         e.target.remove()
//     })
// })


const ul = document.querySelector('ul')
// ul.remove()

const button = document.querySelector("button")

// button = document.querySelector('button')
// button.addEventListener('click', () => {
//     title.classList.add('error')
// })



button.addEventListener("click", () => {
    // ul.innerHTML += "<li>fuck this grocery list</>"
    const li = document.createElement('li')
    li.textContent = 'once again, fuck this list'
    // ul.prepend(li) //this sends it to the beginning of the list
    ul.append(li) //this sends it to the end of the list
})

ul.addEventListener("click", e => {
    console.log(e)
    if (e.target.tagName === "LI") {
       e.target.remove(); 
    }
})