const btn = document.querySelector('button');
const texto = document.querySelector('h2');


btn.addEventListener('click',(e)=>{
    e.preventDefault();
    texto.textContent=ColorAleatorio();
    document.body.style.backgroundColor=ColorAleatorio();
})

const ColorAleatorio=()=>{
    const rangoHexagesimal='0123456789ABCDEF';
    let color='#';

    for (let i = 0; i < 6; i++) {
        let randomNum=Math.floor((Math.random()*16)+1)
        color += rangoHexagesimal[randomNum-1];
        console.log(color);
    }
    return color;
}
