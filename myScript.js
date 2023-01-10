const pianoKeys = document.querySelectorAll(".piano-keys .key");

volumeSlider = document.querySelector(".volume-slider input");

keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
    audio = new Audio("tunes/a.wav");

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    // calling playtune function with passing data-key value as an argument 
    key.addEventListener('click', () => playTune(key.dataset.key));
    console.log(key.dataset.key);
});

const playTune = (key) => {
    audio.src = `tunes/${key}.wav` // passing audio src based on key pressed
    audio.play(); // playing audio

    const clickedKey = document.querySelector(`[data-key = "${key}"]`);

    clickedKey.classList.add("active");

    setTimeout(() => {
        clickedKey.classList.remove("active"); // removing active class after 150 ms from the clicked key element
    }, 150);
}

const hide$SeekKeys = () => {
    // toggling hide class from each key on the checkbox click
    pianoKeys.forEach(key => key.classList.toggle("hide"));
}

const handleVolume = (e) => {
    audio.volume = e.target.value; // passing the range slider value as an audio volume
}

const pressedKey = (e) => {
    // If the pressed key is in the allKey array, then only call the playTune Function 
    if (allKeys.includes(e.key)) playTune(e.key);
}

keysCheckbox.addEventListener("click", hide$SeekKeys)

volumeSlider.addEventListener("input", handleVolume);

document.addEventListener("keydown", pressedKey);





