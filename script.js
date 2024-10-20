document.addEventListener('DOMContentLoaded', () => {

navigator.mediaDevices.getUserMedia({ audio: true })
  .then(stream => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const source = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 256; // Adjust for more granularity
    source.connect(analyser);
    
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    const threshold = 100; // Adjust this value based on your desired threshold
    
    const detectSound = () => {
      analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b) / dataArray.length;
      if (average > threshold) {
        console.log("sound");
        const audio = new Audio('sound2.wav');
        audio.play();
        //sound3.play();
        checkDots2();
      }
      requestAnimationFrame(detectSound);
    };
    
    detectSound();
  })
  .catch(err => {
    console.error('Error accessing the microphone: ', err);
  });
    const player = document.getElementById('player');
    const player2 = document.getElementById('player2');
    const player3 = document.getElementById('player3');
    
    const dots = document.querySelectorAll('.dot');
    const dots2 = document.querySelectorAll('.dot2');
    const dots3 = document.querySelectorAll('.dot3');

    const startButton = document.getElementById('startButton');
    const startButton2 = document.getElementById('startButton2');
    const startButton3 = document.getElementById('startButton3');
    const startButton4 = document.getElementById('startButton4');

    const sound = document.getElementById('sound');
    const sound2 = document.getElementById('sound2');
    const sound3 = document.getElementById('sound3');

    let playerPosition = 0;
    let player2Position = 0;
    let player3Position = 0;

    const speed = 3; // Adjust the speed as needed
    let autoplay = false;

    function movePlayer() {
        playerPosition += speed;
        player.style.left = playerPosition + 'px';

        if (playerPosition < document.querySelector('.line').offsetWidth - player.offsetWidth) {
            requestAnimationFrame(movePlayer);
        }
    }

    function movePlayer2() {
        player2Position += speed;
        player2.style.left = playerPosition + 'px';

        if (player2Position < document.querySelector('.line').offsetWidth - player2.offsetWidth) {
            requestAnimationFrame(movePlayer2);
        }
    }

    function movePlayer3() {
        player3Position += speed;
        player3.style.left = playerPosition + 'px';

        if (player3Position < document.querySelector('.line').offsetWidth - player3.offsetWidth) {
            requestAnimationFrame(movePlayer3);
        }
    }

    function checkDots() {
        dots.forEach(dot => {
            if (Math.abs(playerPosition - dot.offsetLeft) < 30) { // More lenient timing
                dot.style.backgroundColor = 'white';
                if (autoplay) {
                    sound.play();
                }
            }
        });
    }

    function checkDots2() {
        dots2.forEach(dot2 => {
            if (Math.abs(player2Position - dot2.offsetLeft) < 30) { // More lenient timing
                dot2.style.backgroundColor = 'white';
                if (autoplay) {
                    sound2.play();
                }
            }
        });
    }

    function checkDots3() {
        dots3.forEach(dot3 => {
            if (Math.abs(player3Position - dot3.offsetLeft) < 30) { // More lenient timing
                dot3.style.backgroundColor = 'white';
                if (autoplay) {
                    sound3.play();
                }
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'b') {
            const audio = new Audio('sound1.wav');
            audio.play();
            checkDots();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'n') {
            const audio = new Audio('sound2.wav');
            audio.play();
            checkDots2();
        }
    });

//    document.addEventListener('keydown', (event) => {
//        if (event.key === 'm') {
//            const audio = new Audio('sound3.wav');
//            audio.play();
            //sound3.play();
//            checkDots3();
//        }
//    });

//------------------------------------------------------------------
    document.addEventListener('keydown', (event) => {
        if (event.key === '1') {
            const audio = new Audio('piano/F3.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '2') {
            const audio = new Audio('piano/Fs3.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '3') {
            const audio = new Audio('piano/G3.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '4') {
            const audio = new Audio('piano/Gs3.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '5') {
            const audio = new Audio('piano/A3.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '6') {
            const audio = new Audio('piano/As3.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '7') {
            const audio = new Audio('piano/B3.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '8') {
            const audio = new Audio('piano/C4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '9') {
            const audio = new Audio('piano/Cs4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === '0') {
            const audio = new Audio('piano/D4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'q') {
            const audio = new Audio('piano/Ds4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'w') {
            const audio = new Audio('piano/E4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'e') {
            const audio = new Audio('piano/F4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'r') {
            const audio = new Audio('piano/Fs4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 't') {
            const audio = new Audio('piano/G4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'y') {
            const audio = new Audio('piano/Gs4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'u') {
            const audio = new Audio('piano/A4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'i') {
            const audio = new Audio('piano/As4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'o') {
            const audio = new Audio('piano/B4.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'p') {
            const audio = new Audio('piano/C5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'a') {
            const audio = new Audio('piano/Cs5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 's') {
            const audio = new Audio('piano/D5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'd') {
            const audio = new Audio('piano/Ds5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'f') {
            const audio = new Audio('piano/E5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'g') {
            const audio = new Audio('piano/F5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'h') {
            const audio = new Audio('piano/Fs5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'j') {
            const audio = new Audio('piano/G5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'k') {
            const audio = new Audio('piano/Gs5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'l') {
            const audio = new Audio('piano/A5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'z') {
            const audio = new Audio('piano/As5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'x') {
            const audio = new Audio('piano/B5.wav');
            audio.play();
            checkDots3();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'c') {
            const audio = new Audio('piano/C6.wav');
            audio.play();
            checkDots3();
        }
    });
//------------------------------------------------------------

    startButton.addEventListener('click', () => {
        playerPosition = 0;
        player.style.left = playerPosition + 'px';
        autoplay = false;
        movePlayer();
    });

    startButton2.addEventListener('click', () => {
        player2Position = 0;
        player2.style.left = player2Position + 'px';
        autoplay = false;
        movePlayer2();
    });

    startButton3.addEventListener('click', () => {
        player3Position = 0;
        player3.style.left = player3Position + 'px';
        autoplay = false;
        movePlayer3();
    });

    startButton4.addEventListener('click', () => {
        playerPosition = 0;
        player.style.left = playerPosition + 'px';
        autoplay = false;
        movePlayer();

        player2Position = 0;
        player2.style.left = player2Position + 'px';
        autoplay = false;
        movePlayer2();

        player3Position = 0;
        player3.style.left = player3Position + 'px';
        autoplay = false;
        movePlayer3();
    });

    autoplayButton.addEventListener('click', () => {
        playerPosition = 0;
        player.style.left = playerPosition + 'px';
        autoplay = true;
        movePlayer();
    });

    resetButton.addEventListener('click', () => {
        dot.style.backgroundColor = 'red';
    });

    function movePlayer() {
        playerPosition += speed;
        player.style.left = playerPosition + 'px';

        if (autoplay) {
            checkDots();
        }

        if (playerPosition < document.querySelector('.line').offsetWidth - player.offsetWidth) {
            requestAnimationFrame(movePlayer);
        }
    }

    function movePlayer2() {
        player2Position += speed;
        player2.style.left = player2Position + 'px';

        if (autoplay) {
            checkDots2();
        }

        if (player2Position < document.querySelector('.line').offsetWidth - player2.offsetWidth) {
            requestAnimationFrame(movePlayer2);
        }
    }

    function movePlayer3() {
        player3Position += speed;
        player3.style.left = player3Position + 'px';

        if (autoplay) {
            checkDots3();
        }

        if (player3Position < document.querySelector('.line').offsetWidth - player3.offsetWidth) {
            requestAnimationFrame(movePlayer3);
        }
    }

    function onMIDIMessage(event) {
        let str = `MIDI message received at timestamp ${event.timeStamp}[${event.data.length} bytes]: `;
        for (const character of event.data) {
          str += `0x${character.toString(16)} `;
        }
        console.log(str);
      }
      
      function startLoggingMIDIInput(midiAccess) {
        midiAccess.inputs.forEach((entry) => {
          entry.onmidimessage = onMIDIMessage;
        });
      }
    


});
