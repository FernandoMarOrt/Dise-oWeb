let audio = document.getElementById('myAudio');
let volumen = document.getElementById('volumenN');
var btnPlay = document.getElementById('play');
var volumenSlider = document.getElementById('volumenN');  // Agregado: Definir volumenSlider
volumenSlider.addEventListener("input", ajustarVolumen);

var tiempoReproduccionDisplay = document.getElementById("tiempoReproduccion");

audio.addEventListener("timeupdate", actualizarTiempoReproduccion);
audio.addEventListener("loadedmetadata", mostrarDuracion);  // Agregado: Evento para obtener la duración del audio

function playPause() {
    let imgplay = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAl0lEQVRIS2NkoDFgpLH5DKMWEAzhAQ+iDUAnFgDxA4JOxaGAkA/+A/V9AOIJQNxIjiXEWAAzF+SLRCA+QIpFpFgAMxcUbIXEBhs5FoAsIjrYyLWA6GCj1IKHQJsS8MULuRZ8hKasBkIRTo4FG0nJG6RYQDA4sPmGGAuIDg5yLKB5UUEoDgnKEwoiggYQUjBqAaEQon2lDwCCBSIZQeNI9AAAAABJRU5ErkJggg==";
    let imgpause = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAARElEQVRIS2NkoDFgpLH5DKMWEAzhkRFE/5HCAeZjbGJYg4uYIBq1gGBKGw2i0SDCXyITk9EIhiE+BaMWEAy+0SAiGEQAoSkUGZGNMAQAAAAASUVORK5CYII=";

    if (btnPlay.src === imgplay) {
        audio.play();
        btnPlay.src = imgpause;
    } else {
        audio.pause();
        btnPlay.src = imgplay;
    }
}



function restartAudio() {
    audio.currentTime = 0;
    playPause();
}

function stopAudio() {
    audio.pause();
    audio.currentTime = 0;
    btnPlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAl0lEQVRIS2NkoDFgpLH5DKMWEAzhAQ+iDUAnFgDxA4JOxaGAkA/+A/V9AOIJQNxIjiXEWAAzF+SLRCA+QIpFpFgAMxcUbIXEBhs5FoAsIjrYyLWA6GCj1IKHQJsS8MULuRZ8hKasBkIRTo4FG0nJG6RYQDA4sPmGGAuIDg5yLKB5UUEoDgnKEwoiggYQUjBqAaEQon2lDwCCBSIZQeNI9AAAAABJRU5ErkJggg==";
}

function increaseVolume() {
    if (audio.volume < 1) {
        audio.volume += 0.1;
        volumen.value = audio.volume * 100;
        document.getElementById("volumenN").innerHTML = audio.volume * 100 + "%";
    }
}

function decreaseVolume() {
    if (audio.volume > 0) {
        audio.volume -= 0.1;
        volumen.value = audio.volume * 100;
        document.getElementById("volumenN").innerHTML = audio.volume * 100 + "%";
    }
}




function actualizarTiempoReproduccion() {
    var tiempoActual = formatearTiempo(audio.currentTime);
    var duracion = formatearTiempo(audio.duration);
    tiempoReproduccionDisplay.textContent = tiempoActual + " / " + duracion;
}

function mostrarDuracion() {
    var duracionTotal = formatearTiempo(audio.duration);
    tiempoReproduccionDisplay.textContent = "0:00 / " + duracionTotal;
}

function formatearTiempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = Math.floor(segundos % 60);
    return minutos + ":" + (segundosRestantes < 10 ? "0" : "") + segundosRestantes;
}