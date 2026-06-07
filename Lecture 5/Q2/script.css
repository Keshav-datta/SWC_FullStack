const display =
    document.getElementById("display");

const startBtn =
    document.getElementById("startBtn");

const pauseBtn =
    document.getElementById("pauseBtn");

const resetBtn =
    document.getElementById("resetBtn");

let seconds = 0;
let timer = null;

/*
    Format Time
*/
function formatTime(totalSeconds){

    const hrs =
        Math.floor(totalSeconds / 3600);

    const mins =
        Math.floor((totalSeconds % 3600) / 60);

    const secs =
        totalSeconds % 60;

    return (
        String(hrs).padStart(2, "0") + ":" +
        String(mins).padStart(2, "0") + ":" +
        String(secs).padStart(2, "0")
    );
}

/*
    Update Display
*/
function updateDisplay(){

    display.textContent =
        formatTime(seconds);
}

/*
    Start Stopwatch
*/
function startStopwatch(){

    if(timer !== null) return;

    timer = setInterval(() => {

        seconds++;

        updateDisplay();

    }, 1000);
}

/*
    Pause Stopwatch
*/
function pauseStopwatch(){

    clearInterval(timer);

    timer = null;
}

/*
    Reset Stopwatch
*/
function resetStopwatch(){

    clearInterval(timer);

    timer = null;

    seconds = 0;

    updateDisplay();
}

/*
    Event Listeners
*/
startBtn.addEventListener(
    "click",
    startStopwatch
);

pauseBtn.addEventListener(
    "click",
    pauseStopwatch
);

resetBtn.addEventListener(
    "click",
    resetStopwatch
);
