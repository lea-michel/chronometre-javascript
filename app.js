let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let myInterval;
const millisecondSpan = document.querySelector(".millisecond");
const secondSpan = document.querySelector(".second");
const minuteSpan = document.querySelector(".minute");
const hourSpan = document.querySelector(".hour");

//permet de démarrer le chronomètre
function start() {
  myInterval = setInterval(function () {
    millisecond++;

    if (millisecond === 100) {
      millisecond = 0;
      second++;
      secondSpan.innerText = second;
    }
    if (second === 60) {
      second = 0;
      minute++;
      minuteSpan.innerText = minute;
      secondSpan.innerText = second;
    }
    if (minute === 60) {
      minute = 0;
      hour++;
      minuteSpan.innerText = minute;
      hourSpan.innerText = hour;
    }

    millisecondSpan.innerText = millisecond;
  }, 10);
}
//permet de réinitialiser le chronomètre
function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  millisecondSpan.innerText = millisecond;
  secondSpan.innerText = second;
  minuteSpan.innerText = minute;
  hourSpan.innerText = hour;
}

//permet de stopper le chronomètre
function stop() {
  clearInterval(myInterval);
}

//sélection des trois boutons du chronomètre
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

//création des différents écouteurs d'évènements pour les boutons start, stop et reset
startButton.addEventListener("click", (e) => {
  e.preventDefault;
  start();
});
stopButton.addEventListener("click", (e) => {
  stop();
});
resetButton.addEventListener("click", (e) => {
  reset();
});
