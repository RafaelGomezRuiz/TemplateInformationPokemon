const input = document.querySelectorAll('input');
const content= document.getElementById('content');

let color;

content.addEventListener('input',(e)=>{
        document.body.style.backgroundColor= CambiarColorRGB();
})

const CambiarColorRGB=()=>{
    let red=input[0].value;
    let verde=input[1].value;
    let azul=input[2].value;

    return color=`rgb(${red},${verde},${azul})`;
}