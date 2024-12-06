const div1 = document.getElementById("uno")
const div2 = document.getElementById("dos")
const div3 = document.getElementById("tres")
const div4 = document.getElementById("cuatro")

div1.addEventListener('click',() => {
    div1.style.backgroundColor = 'black'
})

div2.addEventListener('click',() => {
    div2.style.backgroundColor = 'black'
})

div3.addEventListener('click',() => {
    div3.style.backgroundColor = 'black'
})

div4.addEventListener('click',() => {
    div4.style.backgroundColor = 'black'
})

/********************************************************/

document.addEventListener('keydown', (e) => {    
    if (e.key === "a" || e.key === "A") {
        cambiaColor('pink');
    } else if (e.key === "s" || e.key === "S") {
        cambiaColor('orange')
    } else if (e.key === "d" || e.key === "D") {
        cambiaColor('lightblue')
    } else if (e.key === "q" || e.key === "Q") {
        creaDiv('purple')
    } else if (e.key === "w" || e.key === "W") {
        creaDiv('grey')
    } else if (e.key === "e" || e.key === "e") {
        creaDiv('brown')
    }
})

/********************************************************/

const divKey = document.getElementById("key")

const cambiaColor = (color) => {
    divKey.style.backgroundColor = color
}

/********************************************************/

const creaDiv = (colorDiv) => {
    const nuevoDiv = document.createElement("div");
    
    nuevoDiv.style.height = '200px'
    nuevoDiv.style.width='200px'
    nuevoDiv.style.margin = '50px'
    nuevoDiv.style.border = '1px solid black'

    nuevoDiv.style.backgroundColor = colorDiv

    document.body.appendChild(nuevoDiv);
}
