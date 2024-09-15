function changeCharacter(imageSrc, characterName) {
    const mainCharacter = document.querySelector('#main-character');
    document.getElementById('character-name').textContent = characterName;
    
    // Hapus kelas glitch jika ada sebelumnya
     mainCharacter.classList.remove('glitch');

    // Ganti gambar dengan karakter baru
    mainCharacter.src = imageSrc;

    // Paksa reflow (untuk mengulang animasi glitch)
    void mainCharacter.offsetWidth;

    // Tambahkan kelas glitch untuk memicu animasi
    mainCharacter.classList.add('glitch');
}

  document.addEventListener("DOMContentLoaded", function () {
    const introSound = document.getElementById("intro-sound");
    const music = document.getElementById("background-music");
    const playPauseBtn = document.getElementById("play-pause-btn");
    const progressBar = document.getElementById("progress-bar");

    // Set background music volume (adjust the value between 0.0 and 1.0)
    music.volume = 0.2; // Set volume to 20%
    
     // Play intro sound when the page loads
     introSound.play();

     introSound.addEventListener('ended', function() {
         introSound.remove(); // Remove the intro sound element after it finishes
     });

    // Set initial state to play
    playPauseBtn.classList.add("play");

    // Play/pause toggle
    playPauseBtn.addEventListener("click", function () {
        if (music.paused) {
            music.play();
            playPauseBtn.classList.remove("play");
            playPauseBtn.classList.add("pause");
        } else {
            music.pause();
            playPauseBtn.classList.remove("pause");
            playPauseBtn.classList.add("play");
        }
    });

    // Update progress bar
    music.addEventListener("timeupdate", function () {
        const percentage = (music.currentTime / music.duration) * 100;
        progressBar.value = percentage;
    });

    // Seek with progress bar
    progressBar.addEventListener("input", function () {
        const seekTime = (progressBar.value / 100) * music.duration;
        music.currentTime = seekTime;
    });

    // Add event listeners for character icons
    const sounds = {
        character1: document.getElementById("sound1"),
        character2: document.getElementById("sound2"),
        character3: document.getElementById("sound3"),
        character4: document.getElementById("sound4"),
        character5: document.getElementById("sound5"),
        character6: document.getElementById("sound6"),
        character7: document.getElementById("sound7"),
        character8: document.getElementById("sound8"),
        character9: document.getElementById("sound9"),
        character10: document.getElementById("sound10"),
        character11: document.getElementById("sound11"),
        character12: document.getElementById("sound12"),
        character13: document.getElementById("sound13"),
        character14: document.getElementById("sound14"),
        character15: document.getElementById("sound15"),
        character16: document.getElementById("sound16"),
        character17: document.getElementById("sound17"),
        character18: document.getElementById("sound18"),
        character19: document.getElementById("sound19"),
        character20: document.getElementById("sound20"),
        character21: document.getElementById("sound21"),
        character22: document.getElementById("sound22"),
        character23: document.getElementById("sound23"),
        character24: document.getElementById("sound24"),
        character25: document.getElementById("sound25")
    };

    document.getElementById("BRIM").addEventListener("click", function () {
        sounds.character1.play();
    });

    document.getElementById("PHNX").addEventListener("click", function () {
        sounds.character2.play();
    });

    document.getElementById("SAGE").addEventListener("click", function () {
        sounds.character3.play();
    });

    document.getElementById("SOVA").addEventListener("click", function () {
        sounds.character4.play();
    });

    document.getElementById("VIPER").addEventListener("click", function () {
        sounds.character5.play();
    });

    document.getElementById("CYPH").addEventListener("click", function () {
        sounds.character6.play();
    });

    document.getElementById("REYNA").addEventListener("click", function () {
        sounds.character7.play();
    });

    document.getElementById("KILL").addEventListener("click", function () {
        sounds.character8.play();
    });

    document.getElementById("BRCH").addEventListener("click", function () {
        sounds.character9.play();
    });

    document.getElementById("OMEN").addEventListener("click", function () {
        sounds.character10.play();
    });

    document.getElementById("JETT").addEventListener("click", function () {
        sounds.character11.play();
    });

    document.getElementById("RAZE").addEventListener("click", function () {
        sounds.character12.play();
    });

    document.getElementById("SKYE").addEventListener("click", function () {
        sounds.character13.play();
    });

    document.getElementById("YORU").addEventListener("click", function () {
        sounds.character14.play();
    });

    document.getElementById("ASTRA").addEventListener("click", function () {
        sounds.character15.play();
    });

    document.getElementById("KAYO").addEventListener("click", function () {
        sounds.character16.play();
    });

    document.getElementById("CHAM").addEventListener("click", function () {
        sounds.character17.play();
    });

    document.getElementById("NEON").addEventListener("click", function () {
        sounds.character18.play();
    });

    document.getElementById("FADE").addEventListener("click", function () {
        sounds.character19.play();
    });

    document.getElementById("HRBR").addEventListener("click", function () {
        sounds.character20.play();
    });

    document.getElementById("GEKK").addEventListener("click", function () {
        sounds.character21.play();
    });

    document.getElementById("DLCK").addEventListener("click", function () {
        sounds.character22.play();
    });

    document.getElementById("ISO").addEventListener("click", function () {
        sounds.character23.play();
    });

    document.getElementById("CLVE").addEventListener("click", function () {
        sounds.character24.play();
    });

    document.getElementById("VYSE").addEventListener("click", function () {
        sounds.character25.play();
    });
});