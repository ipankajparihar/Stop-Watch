// taking components to add functionality on these
var screen = document.getElementsByClassName("screen");
var stopBtn = document.getElementById("stopBtn");
var startBtn = document.getElementById("startBtn");
var resetBtn = document.getElementById("resetBtn");
var counter = document.getElementById("counter");

// variables
let count = 0;
let prevCount = 0;

var isStart = false;
var startCount = false;

var green = false;
var yellow = false;
var red = false;

// Here I took Date.now() to implement stopwatch in minutes:seconds:milliSeconds

// this function converts time to minutes:seconds:milliSeconds  string format
function timeCounter(time) {
  //hours conversion
  let hrs = time / 3600000;
  let h = Math.floor(hrs);

  //minutes conversion of hours
  let mins = (hrs - h) * 60;
  let m = Math.floor(mins);

  //seconds conversion of minutes
  let sec = (mins - m) * 60;
  let s = Math.floor(sec);

  //milliseconds conversion of second
  let miliSec = (sec - s) * 100;
  let mil = Math.floor(miliSec);

  //all of above value we can get in one digit format but we need two digit format to do so
  //I used pasStart function which will pad string with 0 for single digits
  let hours = h.toString().padStart(2, "0");
  let minutes = m.toString().padStart(2, "0");
  let seconds = s.toString().padStart(2, "0");
  let mSeconds = mil.toString().padStart(2, "0");

  return `${minutes}:${seconds}:${mSeconds}`;
}

//stop button fuctionality which will halt the counter
stopBtn.addEventListener("click", function stop() {
  console.log("stop");
  isStart = false;
  clearInterval(myVar);

  //changing stop button color on clicking itself or another

  stopBtn.style.backgroundColor = "red";
  stopBtn.style.color = "black";

  startBtn.style.backgroundColor = "rgb(45, 44, 44)";
  startBtn.style.color = "white";

  resetBtn.style.backgroundColor = "rgb(45, 44, 44)";
  resetBtn.style.color = "white";
});

//reset button which will reset the couter value on stop or while running the counter

resetBtn.addEventListener("click", function reset() {
  count = 0;
  prevCount = Date.now() - count;

  counter.innerHTML = timeCounter(count);
  console.log("reset");

  //changing reset button color on clicking itself or another
  resetBtn.style.backgroundColor = "yellow";
  resetBtn.style.color = "black";

  startBtn.style.backgroundColor = "rgb(45, 44, 44)";
  startBtn.style.color = "white";

  stopBtn.style.backgroundColor = "rgb(45, 44, 44)";
  stopBtn.style.color = "white";
});

//start button functionality which will start the counter from zero or where it stopped

//counter which is changing the screen value
if (startCount) {
  function timer() {
    count = Date.now() - prevCount;

    isStart = true;
    counter.innerHTML = timeCounter(count);

    console.log("timer");
  }
}

let myVar = setInterval(timer, 100);

// counter which is starting from where is was stopped
function againTimer() {
  if (!isStart) {
    prevCount = Date.now() - count;

    myVar = setInterval(timer, 100);

    //changing start button color on clicking itself or another
    resetBtn.style.backgroundColor = "rgb(45, 44, 44)";
    resetBtn.style.color = "white";

    startBtn.style.backgroundColor = "rgb(101, 215, 112)";
    startBtn.style.color = "black";

    stopBtn.style.backgroundColor = "rgb(45, 44, 44)";
    stopBtn.style.color = "white";
  }
}

//start btn click functionality
startBtn.addEventListener("click", againTimer, (startCount = true));
