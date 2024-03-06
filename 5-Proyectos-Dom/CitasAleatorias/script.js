const autor=document.getElementById('autor');
const cita= document.getElementById('cita');
const btn=document.getElementById('btn-cambiar-cita');

btn.addEventListener('click',()=>{
  let numAleatorio=NumAleatorio(0,citas.length-1)
  autor.textContent=citas[numAleatorio].autor;
  cita.textContent=citas[numAleatorio].texto;
})

function NumAleatorio(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}
