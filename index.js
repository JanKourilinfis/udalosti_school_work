const blok=document.getElementById("blok")
var barvel=false
const nadpis=document.getElementById("nadpis")
var nadzmen=false
function tlacitko(){
    alert("tlačítko zmáčknuto")
}
document.getElementById("barva").addEventListener("click", ()=>{
if(barvel){
    blok.style.backgroundColor="purple"
    blok.style.height="400px"
    blok.style.width="300px"
    barvel=false
}
else{
blok.style.backgroundColor="red"
blok.style.height="200px"
blok.style.width="200px"
barvel=true
}
})
document.getElementById("nadpisTlacitko").addEventListener("click", ()=>{
    if(nadzmen){
        nadpis.style.color="blue"
        nadpis.innerHTML="BAF 👻👻"
        nadzmen=false
    }
    else{
        nadpis.style.color="red"
        nadpis.innerHTML="dobrý den"
        nadzmen=true
    }
})