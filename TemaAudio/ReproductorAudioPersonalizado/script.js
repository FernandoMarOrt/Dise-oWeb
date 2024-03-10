
const audio = document.getElementById('audio')
audio.volume = 0.5

const tiempoActual = document.getElementById('tiempo-actual')
const tiempoMaximo = document.getElementById('tiempo-maximo')
const botonPlayPause = document.getElementById('play/pause')
const botonVolumen = document.getElementById('boton-volumen')
const barraVolumen = document.getElementById('barra-volumen')
const barraDuracion = document.getElementById('barra-duracion')
const botonStop = document.getElementById('boton-stop')
const botonRestart = document.getElementById('boton-reiniciar')
const botonRepeat = document.getElementById('boton-repeat')
const botonAcelerar = document.getElementById('boton-acelerar')

audio.preload = 'metadata'

//Reinicio
botonRestart.addEventListener('click', () => {
  audio.currentTime = 0
})

//Stop
botonStop.addEventListener("click", () => {
  audio.pause()
  botonPlayPause.className = "play"
  audio.currentTime = 0
})

//Puase/Play
botonPlayPause.addEventListener('click', () => {
  botonPlayPause.className = botonPlayPause.className === 'play' ? 'pause' : 'play'
  if (!audio.paused) {
    audio.pause()
    console.log('Pausado') 
  } else {
    audio.play()
    console.log('Reproduciendose') 
  }
})

//Tiempo numero
tiempoActual.innerHTML = '00:00'
audio.addEventListener('timeupdate', () => {
  const tiempo = Number.parseInt(audio.currentTime)
  const tiempoFormateado = formatTime(tiempo)
  if (tiempoFormateado != tiempoActual.innerHTML) {
    tiempoActual.innerHTML = tiempoFormateado
    barraDuracion.value = Number.parseInt(100 * tiempo / audio.duration)
    barraDuracion.style.setProperty("--value", barraDuracion.value)
  }
})

//Formatear tiempo
function formatTime (time) {
  let seconds = Number.parseInt(time % 60)
  seconds = time % 60 >= 10 ? `${seconds}` : `0${seconds}`
  let minutes = Number.parseInt(time / 60)
  minutes = Number.parseInt(time / 60) >= 10 ? `${minutes}` : `0${minutes}`
  const formatted = `${minutes}:${seconds}`
  return formatted
}

//Tiempo
tiempoMaximo.innerHTML = formatTime(audio.duration)
audio.addEventListener('durationchange', (e) => {
  tiempoMaximo.innerHTML = formatTime(e.target.duration)
})

//Barra de duracion
barraDuracion.addEventListener("change", (e) => {
  audio.currentTime = (Number.parseInt(e.target.value * audio.duration / 100))
})

// Reseteo cancion
barraDuracion.style.setProperty("--value", barraDuracion.value)

//Volumen
barraVolumen.addEventListener('change', () => {
  if (audio.muted) {
    audio.muted = false
    botonVolumen.className = 'unmuted'
  }

  const nuevoVolumen = barraVolumen.value / 100
  audio.volume = nuevoVolumen
})

//Muteado/Desmuteado
var volumenAnterior
botonVolumen.addEventListener('click', () => {
  if (botonVolumen.className === 'muted') {
    botonVolumen.className = 'unmuted'
    audio.muted = false
    audio.volume = volumenAnterior
  } else {
    botonVolumen.className = 'muted'
    audio.muted = true
    volumenAnterior = audio.volume
    audio.volume = 0
  }
})

// Movimiento barra sonido
audio.addEventListener('volumechange', () => {
  barraVolumen.value = audio.volume * 100
  barraVolumen.style.setProperty("--value", barraVolumen.value)
})

botonRepeat.addEventListener("click", () => {
  if (botonRepeat.className === "loop") {
    audio.loop = false
    botonRepeat.className = ""
  } else {
    audio.loop = true
    botonRepeat.className = "loop"
  }
})

//Acelerar
botonAcelerar.addEventListener("click", () => {
  if (botonAcelerar.className === "acelerado") {
    audio.playbackRate = 1
    botonAcelerar.className = ""
    console.log()
  } else {
    audio.playbackRate = 2
    botonAcelerar.className = "acelerado"
  }
})
