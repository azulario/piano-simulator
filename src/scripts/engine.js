
const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector('.volume-slider input');
const keysCheck = document.querySelector('.keys-check input');

let mapedKeys = [];

let audio = new Audio("src/tunes/a.wav");

const playTune = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.currentTime = 0; // Reset audio to the start
    audio.play();

    const clickedKey = document.querySelector(`.key[data-key="${key}"]`);
    clickedKey.classList.add('active');
    setTimeout(() => {
        clickedKey.classList.remove('active');
    }, 150); // Remove active class after 150ms
    clickedKey.classList.add('playing');
};

pianoKeys.forEach((key) => {
    key.addEventListener('click', () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener('keydown', (e) => {
    
    if (mapedKeys.includes(e.key)) {
        playTune(e.key);
    }
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // Convert slider value to a range of 0.0 to 1.0
}
const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle('hide');
    });
}

volumeSlider.addEventListener('input', handleVolume);
keysCheck.addEventListener("click", showHideKeys);