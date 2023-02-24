const play=document.getElementById('play')
const botones=document.getElementById('gameboard__button')
const resultados=document.getElementById('gameboard__result')
const piedra=document.getElementById('stone')
const papel=document.getElementById('paper')
const tijera=document.getElementById('scissor')
const tphuman=document.getElementById('human')
const tpmachine=document.getElementById('machine')
const tptie=document.getElementById('tie')
const anuncio=document.getElementById('anuncement')
let cantj=document.getElementById('juegos')
let pmachine=0
let puser=0
let ptie=0
let cant=0
const opciones=['piedra','papel','tijera']
play.addEventListener('click',()=>{
    cant=parseInt(cantj.value)
    cantj.value=''
    cantj.style.visibility='hidden'
    botones.style.visibility='visible'
    resultados.style.visibility='visible'
    anuncio.style.visibility='hidden'
    play.style.visibility='hidden'
})

piedra.addEventListener('click',()=>
elegir('piedra'))
papel.addEventListener('click',()=>
elegir('papel'))
tijera.addEventListener('click',()=>
elegir('tijera'))

function anunciar(result){
    anuncio.innerHTML=`<h2>${result}</h2>`
    anuncio.style.visibility='visible' 
    setTimeout(ocultarAnuncio,1000)
}

function ocultarAnuncio(){
    anuncio.style.visibility='hidden'
}

function elegir(user){
    let machine=chooseMachine()
    console.log(`machine ${machine}`)
    console.log(`user ${user}`)
    let result
    if(machine=='piedra' && user=='tijera'){
        pmachine++
        result='Machine WIN'   
    } else if(machine=='tijera' && user=='papel'){
        pmachine++
        result='Machine WIN'   
    } else if(machine=='papel' && user=='piedra'){
        pmachine++
        result='Machine WIN'   
    } else if(machine=='tijera' && user=='piedra'){
        puser++
        result='User WIN'   
    }else if(machine=='papel' && user=='tijera'){
        puser++
        result='User WIN'   
    }else if(machine=='piedra' && user=='papel'){
        puser++
        result='User WIN'   
    } else if(user==machine){
        result='USER AND MACHINE TIE'
        ptie++
    }
    tphuman.innerHTML=puser
    tpmachine.innerHTML=pmachine
    tptie.innerHTML=ptie
    cant--

    if(cant>0){
        anunciar(result)
    }else{
        mostrarGanador()
    }
    
}

function mostrarGanador(){
        botones.style.visibility='hidden'
        
        if (puser>pmachine){
           anuncio.innerHTML=`<h    2>Ganador USER</h2>`
           anuncio.style.visibility='visible'
        }else if(puser>pmachine){
            anuncio.innerHTML=`<h2>Ganador MACHINE</h2>`
            anuncio.style.visibility='visible'
        }else{
            anuncio.innerHTML=`<h2>USER AND MACHINE TIE</h2>`
            anuncio.style.visibility='visible'
        }
        pmachine=0
        puser=0
        ptie=0
        
        play.style.visibility='visible'
        cantj.style.visibility='visible'
        setTimeout(ocultarAnuncio,5000)
        
    }

function chooseMachine(){
    let eleccion=Math.floor(Math.random()*3)
    return opciones[eleccion]
}

function recargar(){
    location.reload()
}