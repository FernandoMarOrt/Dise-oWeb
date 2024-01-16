let audio = document.getElementById('myAudio');
let volumen = document.getElementById('volumen');
var btnPlay = document.getElementById('play');

document.getElementById("volumenN").innerHTML=50+"%";


function playPause() {
    if (audio.paused) {
        audio.play();
        btnPlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAl0lEQVRIS2NkoDFgpLH5DKMWEAzhAQ+iDUAnFgDxA4JOxaGAkA/+A/V9AOIJQNxIjiXEWAAzF+SLRCA+QIpFpFgAMxcUbIXEBhs5FoAsIjrYyLWA6GCj1IKHQJsS8MULuRZ8hKasBkIRTo4FG0nJG6RYQDA4sPmGGAuIDg5yLKB5UUEoDgnKEwoiggYQUjBqAaEQon2lDwCCBSIZQeNI9AAAAABJRU5ErkJggg==";
    } else {
        audio.pause();
        btnPlay.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAARElEQVRIS2NkoDFgpLH5DKMWEAzhkRFE/5HCAeZjbGJYg4uYIBq1gGBKGw2i0SDCXyITk9EIhiE+BaMWEAy+0SAiGEQAoSkUGZGNMAQAAAAASUVORK5CYII="; // Reemplaza con la ruta correcta de la imagen de pausa
    }
}

function changeVolume() {
    audio.volume = volumen.value / 100;
    document.getElementById("volumenN").innerHTML=audio.volume *100+"%";
}

function restartAudio() {
    stopAudio();
    playAudio();
}




