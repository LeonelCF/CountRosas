// variables DOM
var btnCount  = __('input')
var output = __('output')
var num = __('selectNumber')
var btnReset = __('reset')
var audio = __('audioFX')
var a = Number(0)

INIT()

btnCount.addEventListener('click', clickCount, true)
btnReset.addEventListener('click', reset, true)

function clickCount(){
    count()
    audioPlay()
}

function count(){
    a = a + Number(num.value)
    render(a)
}

function audioPlay() {
    audio.play()
    // audio.pause()
}


// ========================
// ========================
// ========================
function INIT(){
    num.value = 1 //default
    a = Number(0)
    render(a)
    console.log(num.value)
}

function render(t){
    return output.innerText = t
}

function __(id) {
    return document.getElementById(id)
}

function reset(){
    INIT()
}
