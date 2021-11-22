const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $forward = document.querySelector('#forward')
const $backward = document.querySelector('#backward')
const $player = document.querySelector('#player')

$play.addEventListener('click', handleplay)
$pause.addEventListener('click', handlepause)

function handleplay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al botón de play compa')
}

function handlepause() {
    $video.pause()
    $pause.hidden = true
    $play.hidden = false
    console.log('le diste click al botón de pausa compa')
}

$forward.addEventListener('click', handleforward)

function handleforward() {
    $video.currentTime = $video.currentTime + 10
    console.log('le diste click al botón de palante compa', $video.currenttime)
}    

$backward.addEventListener('click', handlebackward)

function handlebackward() {
    $video.currentTime = $video.currentTime - 10
    console.log('le diste click al botón de patras compa') 
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    $progress.max = $video.duration
    console.log('ha cargado mi video', $video.duration)
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    //console.log('tiempo actual, $video.currentTime')//
}

$progress.addEventListener('input',handleInput)

function handleInput() {
    $video.currentTime = $progress.value
    console.log($progress.value) 

}

$player = document.querySelector("#player"); 
$player.webkitRequestFullScreen();