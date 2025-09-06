const promodoro= 1500;
const longBreak= 900;
const shortBreak =300;

let isPaused =true
let isStared = false
let timeLeft = promodoro;
let choosedTime = promodoro;
let interval= promodoro;

let promodoroBtn = document.getElementById('pomodoro')
let longbreakBtn = document.getElementById('long-break')
let shortbreakBtn = document.getElementById('short-break')
let timeDiv = document.getElementById('time')
let statusDiv = document.getElementById('status')
let circle = document.getElementById('circleId')

promodoroBtn.addEventListener('click',function(){
console.log('promodoroBtn clicked')
choosedTime =promodoro
timeLeft = promodoro
updateDisplay(promodoro)
})


longbreakBtn.addEventListener('click',function(){
console.log('longbreakBtn clicked')
choosedTime=longBreak
timeLeft= longBreak
updateDisplay(longBreak)
})

shortbreakBtn.addEventListener('click',function(){
console.log('shortbreakBtn clicked')
choosedTime= shortBreak
timeLeft= shortBreak
updateDisplay(shortBreak)
})


function updateDisplay(timeInSecond)
{
    let minutes = Math.floor(timeInSecond/60);
    let seconds= timeInSecond%60;
    
    // Time in formate 00:00
    let formattedTime= `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    
    //Update Time div with current Time
    timeDiv.textContent = formattedTime; 
}

// function fire when click on Timer div
function toggleTimer()
{
    console.log('toggles Timer is clicked')
    isPaused = !isPaused;
    //console.log(`isPaused = ${isPaused}`)
    if (isPaused) {
        stopTimer()
    } else {
        startTimer();
    }
}

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
 timeDiv.textContent = formattedTime;
}

function startTimer() {
    console.log(`interval = ${interval} + timeLeft= ${timeLeft}`)
    interval = setInterval(() => {
     timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      timeLeft = choosedTime;
      //to turn it to red and stop on 00
      isPaused = !isPaused
      stopTimer()
    }
  }, 1000);
  statusDiv.textContent = 'Resumed';
  
  circle.setAttribute('stroke','#5cca5c')
  circle.style.borderColor = 'green'
  //console.log(circle)
}

function stopTimer() {
  clearInterval(interval);
  statusDiv.textContent = 'PAUSE';
   circle.setAttribute('stroke','#df7581')
}


