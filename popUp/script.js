const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close')

const button = document.querySelector('button');

// event listener for button
button.addEventListener('click', () => {
popup.style.display = "block";
})

//event listener to close display
close.addEventListener('click', () => {
    popup.style.display = "none";
    })


    //event listener for pop up wrapper to close the popup whenever the wrapper is clicked
    popup.addEventListener('click', () => {
        popup.style.display = "none";
        })