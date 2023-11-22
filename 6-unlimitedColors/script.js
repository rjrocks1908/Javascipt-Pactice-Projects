const start = document.getElementById('start');
const stop = document.querySelector('#stop');
const body = document.querySelector('body');

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const hex = "0123456789ABCDEF"
    let color = "#"
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }

    return color
}

let intervalId

start.addEventListener('click', (event) => {
    if (!intervalId) {
        intervalId = setInterval(() => {
            body.style.backgroundColor = getRandomColor()
        }, 1000)
    }
})

stop.addEventListener('click', (event) => {
    if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
    }
})
