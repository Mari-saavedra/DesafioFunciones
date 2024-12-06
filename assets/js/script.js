/*       
function pintar(){
            ele.style.backgroundColor = 'yellow'
       }

       const ele = document.getElementById("ele1")

       ele.addEventListener("click", pintar);
*/


const ele1 = document.getElementById("ele1")

const pintar = (color = 'green') => {
    ele1.style.backgroundColor = color
}

pintar()

ele1.addEventListener('click', () => pintar('yellow'))
