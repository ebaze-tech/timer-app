//Variables for buttons

const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

//Variables for time values

let seconds = 0;
let minutes = 0;
let hours = 0;

//Variables for leading zero

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

//Variable for set interval & timer status

let timerInterval = null;
let timerStatus = "stopped";

//Stop Watch Function

function stopWatch() {
  seconds++;

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

    if (minutes / 60 === 1) {
      minutes = 0;
      hours++;
    }
  }
  if (seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }
  if (minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }
  if (hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }
  let displayTimer = (document.getElementById("timer").innerText =
    leadingHours + ":" + leadingMinutes + ":" + leadingSeconds);
}

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-stop-circle" id="pause" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
  </svg>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-play-circle" id="play" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
  </svg>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  
  window.clearInterval(timerInterval);
  seconds = 0;
  minutes = 0;
  hours = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
});
