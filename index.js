//GLOBAL VARIABLES
let startButton = false;
let pauseButton = false;
let workHour = 0;
let workMinute = 0;
let workSeconds = 0;
let lazyHour = 0;
let lazyMinute = 0;
let lazySeconds = 0;
// let millisecond = 0;
let startTime = 0;
let elapsedTime = 0;
let elapsedRestTime = 0;
let timerInterval;
let restTimerInterval;



// SHOW AND HIDDE MILLISECONDS
// let buttonSecondsMilliseconds = document.getElementById('button_seconds_milliseconds');

// BUTTONS START, PAUSE AND RESET
let buttonStart = document.getElementById('button_start');
let buttonPause = document.getElementById('button_pause');
let buttonReset = document.getElementById('button_reset');

// TIMERS
let workTimer = document.getElementById('work_timer');
let restTimer = document.getElementById('lazy_timer');

// ONCLICK EVENTS
buttonStart.onclick = workLazyTimers;
buttonPause.onclick = workLazyTimers;
buttonReset.onclick = resetTimers;



// CHANGE START/PAUSE BUTTON DISPLAY & SETTING TO WORK THE TIMER
function workTimerSets() {
  oneOfTheTimers = workTimer;
  startButton = true;
  pauseButton = false;
  buttonStart.hidden = true;
  buttonPause.hidden = false;
};
function restTimerSets() {
  oneOfTheTimers = restTimer;
  startButton = false;
  pauseButton = true;
  buttonPause.hidden = true;
  buttonStart.hidden = false;
};



// SET TIME IN DOM
function workTimeToString(time) {
  let differenceInHrs = time / 3600000;
  let workHour = Math.floor(differenceInHrs);

  let differenceInMin = (differenceInHrs - workHour) * 60;
  let workMinute = Math.floor(differenceInMin);

  let differenceInSec = (differenceInMin - workMinute) * 60;
  let workSeconds = Math.floor(differenceInSec);

  let differenceInMs = (differenceInSec - workSeconds) * 100;
  let workMilliseconds  = Math.floor(differenceInMs);

  let formattedMM = workMinute.toString().padStart(2, "0");
  let formattedSS = workSeconds.toString().padStart(2, "0");
  let formattedMS = workMilliseconds.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
};
function restTimeToString(time) {
  let differenceInHrs = time / 3600000;
  let workHour = Math.floor(differenceInHrs);

  let differenceInMin = (differenceInHrs - workHour) * 60;
  let workMinute = Math.floor(differenceInMin);

  let differenceInSec = (differenceInMin - workMinute) * 60;
  let workSeconds = Math.floor(differenceInSec);

  let differenceInMs = (differenceInSec - workSeconds) * 100;
  let workMilliseconds  = Math.floor(differenceInMs);

  let formattedMM = workMinute.toString().padStart(2, "0");
  let formattedSS = workSeconds.toString().padStart(2, "0");
  let formattedMS = workMilliseconds.toString().padStart(2, "0");

  return `${formattedMM}:${formattedSS}:${formattedMS}`;
};



// SET WORK OR REST TIMER
// function setWhichTimer(theTimer) {
//   theTimer.innerHTML = timeToString(elapsedTime);
// };


// START THE TIMER
function startWorkTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(function printTime() {
    elapsedTime = Date.now() - startTime;
    workTimer.innerHTML = workTimeToString(elapsedTime);
  }, 10);
};
function startRestTimer() {
  startTime = Date.now() - elapsedRestTime;
  restTimerInterval = setInterval(function printTime() {
    elapsedRestTime = Date.now() - startTime;
    restTimer.innerHTML = restTimeToString(elapsedRestTime);
  }, 10);
};



// RESET TIMERS
function resetTimers() {

  clearInterval(timerInterval);
  clearInterval(restTimerInterval);
  elapsedTime = 0;
  elapsedRestTime = 0;
  
  startButton = false;
  pauseButton = false;

  buttonStart.hidden = false;
  buttonPause.hidden = true;

  workTimer.innerHTML = "00:00:00";
  restTimer.innerHTML = "00:00:00";
};



// START EVERYTHING
function workLazyTimers() {
  if (!startButton) {
    workTimerSets();
    startWorkTimer();
    clearInterval(restTimerInterval);

  } else {
    restTimerSets();
    startRestTimer();
    clearInterval(timerInterval);
    
  };
};