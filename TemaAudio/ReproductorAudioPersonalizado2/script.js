document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    var playPauseBtn = document.getElementById("playPauseBtn");
    var stopBtn = document.getElementById("stopBtn");
    var volumeSlider = document.getElementById("volume");
    var muteBtn = document.getElementById("muteBtn");
    var speedSlider = document.getElementById("speed");
    var rewindBtn = document.getElementById("rewindBtn");
    var forwardBtn = document.getElementById("forwardBtn");
    var fullscreenBtn = document.getElementById("fullscreenBtn");
    var timeDisplay = document.getElementById("timeDisplay");

    playPauseBtn.addEventListener("click", playPause);
    stopBtn.addEventListener("click", pararVideo);
    volumeSlider.addEventListener("input", adjustVolume);
    muteBtn.addEventListener("click", toggleMute);
    speedSlider.addEventListener("input", adjustSpeed);
    rewindBtn.addEventListener("click", rewind);
    forwardBtn.addEventListener("click", forward);
    fullscreenBtn.addEventListener("click", toggleFullscreen);
    video.addEventListener("timeupdate", updateTimeDisplay);

    function playPause() {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    function pararVideo() {
        video.pause();
        video.currentTime = 0;
    }

    function adjustVolume() {
        video.volume = volumeSlider.value / 100;
    }

    function toggleMute() {
        video.muted = !video.muted;
    }

    function adjustSpeed() {
        video.playbackRate = speedSlider.value;
    }

    function rewind() {
        video.currentTime -= 5;
    }

    function forward() {
        video.currentTime += 5;
    }

    function toggleFullscreen() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        }
    }

    function updateTimeDisplay() {
        var currentTime = formatTime(video.currentTime);
        var duration = formatTime(video.duration);
        timeDisplay.textContent = currentTime + " / " + duration;
    }

    function formatTime(seconds) {
        var minutes = Math.floor(seconds / 60);
        var remainingSeconds = Math.floor(seconds % 60);
        return minutes + ":" + (remainingSeconds < 10 ? "0" : "") + remainingSeconds;
    }
});
