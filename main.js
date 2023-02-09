let hr = 0;
let min = 0;
let sec = 0;
let count = 0;
let timer = false;
const button = document.getElementById("stop");
const hour = document.getElementById("hr");
const minute = document.getElementById("min");
const seconds = document.getElementById("sec");
const counts = document.getElementById("count");
let logs = document.getElementById('logs')


function start() {
  timer = true;
  stopWatch();
  const button = document.getElementById("stop");
  if (timer) {
    button.innerHTML = "Stop";
  }
}

function stop() {
  timer = false;
  buttonChange();
}

function buttonChange() {
  if (timer == false) {
    button.innerHTML = "Stop";
  } else if (timer == true) {
    button.innerHTML = "Stop";
  } else {
    timer = false;
  }
}

function reset() {
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
  if (timer == false) {
    button.innerHTML = "Stop";
  } else {
    timer == true;
  }
  logs.innerHTML = ""
}

function stopWatch() {
  if (timer == true) {
    count = count + 1;
    if (count == 100) {
      count = 0;
      sec = sec + 1;
    }
    if (sec == 60) {
      sec = 0;
      min = min + 1;
    }
    if (min == 60) {
      min = 0;
      hr = hr + 1;
    }
    let hrStr = hr;
    let minStr = min;
    let secStr = sec;
    let countStr = count;
    if (count < 10) {
      countStr = "0" + countStr;
    }
    if (min < 10) {
      minStr = "0" + minStr;
    }
    if (sec < 10) {
      secStr = "0" + secStr;
    }
    if (hr < 10) {
      hrStr = "0" + hrStr;
    }
    document.getElementById("count").innerHTML = countStr;
    document.getElementById("sec").innerHTML = secStr;
    document.getElementById("min").innerHTML = minStr;
    document.getElementById("hr").innerHTML = hrStr;
    setTimeout("stopWatch()", 10);
    console.log();
  }
}

let logHistory;

function timeLog() {
  let count = [];
  let sec = [];
  let min = [];
  let hr = [];
  
  count = document.getElementById("count").innerHTML;
  sec = document.getElementById("sec").innerHTML;
  min = document.getElementById("min").innerHTML;
  hr = document.getElementById("hr").innerHTML;

  const timeLog = `${hr}.${min}.${sec}.${count}`;
  logHistory = timeLog;
  thisLog();
}


let thisLog = () => {
  logs.innerHTML +=
    ` <div class="logs" id="logs">
<h1 style="text-align: center;">${logHistory}</h1>
</div>`;
  if (timer == false) {
    logs.innerHTML = "";
    alert("Press Start");
  } else {
    timer == true;
  }
};