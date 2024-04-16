document.addEventListener("DOMContentLoaded", function () {
    const playPauseBtn = document.getElementById("playPauseBtn");
    const audioPlayer = document.getElementById("audioPlayer");
  
    playPauseBtn.addEventListener("click", function () {
      if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
      } else {
        audioPlayer.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    });
  });