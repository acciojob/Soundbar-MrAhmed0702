//your JS code here. If required.
const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

const audioElement = document.createElement('audio');
document.body.appendChild(audioElement);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundName = button.dataset.sound;
    audioElement.src = `sounds/${soundName}.mp3`;
    audioElement.play();
  });
});

stopButton.addEventListener('click', () => {
  audioElement.pause();
  audioElement.currentTime = 0;
});