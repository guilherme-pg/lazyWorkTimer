//GLOBAL VARIABLES
let startButton = false;
let pauseButton = false;
let hour = 0;
let minute = 0;
let seconds = 0;
let millisecond = 0;


// SHOW AND HIDDE MILLISECONDS
let buttonSecondsMilliseconds = document.getElementById('button_seconds_milliseconds');

// BUTTONS START/PAUSE AND RESET
let buttonStartPause = document.getElementById('button_start_pause');
let buttonRestart = document.getElementById('button_reset');

// TIMERS
let workTimer = document.getElementById('work_timer');
let lazyTimer = document.getElementById('lazy_timer');

buttonStartPause.onclick = workLazyTime;
buttonReset.onclick = resetTimers;


// FUNCTIONS
function workLazyTimers() {
  if (!startButton) {
    workTimer()
  } else {
    lazyTimer()
  };
};


function workTimer() {
  startButton = true;
  pauseButton = false;

};

function lazyTimer() {
  startButton = false;
  pauseButton = true;

};


function resetTimers() {
  startButton = false;
  pauseButton = false;

  workTimer.innerHTML = "00:00:00:00";
  lazyTimer.innerHTML = "00:00:00:00";
};