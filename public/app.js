var hours = 0;
var mints = 0;
var sec = 0;
var mSecs = 0;
var hoursHeading = document.getElementById("hours");
var mintsHeading = document.getElementById("mints");
var secHeading = document.getElementById("sec");
var mSecsHeading = document.getElementById("mSecs");
var interval;

function timer() {
  mSecs++;
  mSecsHeading.innerHTML = mSecs;
  if (mSecs >= 100) {
    sec++;
    secHeading.innerHTML = sec;
    mSecs = 0;
  } else if (sec >= 60) {
    mints++;
    mintsHeading.innerHTML = mints;
    sec = 0;
  } else if (mints >= 60) {
    hours++;
    mints = 0;
    hoursHeading.innerHTML = hours;
  }
}

function start() {
  interval = setInterval(timer, 10);
}

function pause() {
  clearInterval(interval);
}

function reset() {
  hours = 0;
  mints = 0;
  sec = 0;
  mSecs = 0;
  hoursHeading.innerHTML = hours;
  mintsHeading.innerHTML = mints;
  secHeading.innerHTML = sec;
  mSecsHeading.innerHTML = mSecs;
  pause();
}

var day = new Date("Dec 30, 2020 12:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var diff = day - now;
  var days = Math.floor(diff / (1000 * 60 * 60 * 24));
  console.log(days);
  var hrs = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  console.log(hrs);
  var mint = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  console.log(mint);
  var sec = Math.floor((diff % (1000 * 60)) / 1000);
  console.log(sec);

  var daysCount = document.getElementById("days1");
  var hrsCount = document.getElementById("hrs1");
  var mintCount = document.getElementById("mint1");
  var secCount = document.getElementById("sec1");
  daysCount.innerHTML = days;
  hrsCount.innerHTML = hrs;
  mintCount.innerHTML = mint;
  secCount.innerHTML = sec;
}, 1000);
