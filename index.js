let startButton = document.querySelector('#start');
let stopButton = document.querySelector('#stop');
let saveButton = document.querySelector('#save');
let resetButton = document.querySelector('#reset');
let time = document.querySelector('.timerZone__time');



let timeArr = [0, 0, 0, 0];
let timerId = 0;

let start = () => {
    if (!timerId) {
    timerId = setInterval(() => {
        timeArr[3] += 1;
        if (timeArr[3] == 100) { timeArr[2] += 1; timeArr[3] = 0; }
        if (timeArr[2] == 60) { timeArr[1] += 1; timeArr[2] = 0; }
        if (timeArr[1] == 60) { timeArr[0] += 1; timeArr[1] = 0; }
        time.innerHTML = `${timeArr[0] > 9 ? timeArr[0] : '0' + timeArr[0]}:${timeArr[1] > 9 ? timeArr[1] : '0' + timeArr[1]}:${timeArr[2] > 9 ? timeArr[2] : '0' + timeArr[2]}:${timeArr[3] > 9 ? timeArr[3] : '0' + timeArr[3]}`;
    } ,10) }
}

let stop = () => {
    if (timerId) { clearInterval(timerId); timerId = 0;}
}


let save = () => {
    document.querySelector('#savedTimeList').innerHTML = `
    <div class="timerZone__savedTime">
        <div class="timerZone__savedTime-content">
            ${timeArr[0] > 9 ? timeArr[0] : '0' + timeArr[0]}:${timeArr[1] > 9 ? timeArr[1] : '0' + timeArr[1]}:${timeArr[2] > 9 ? timeArr[2] : '0' + timeArr[2]}:${timeArr[3] > 9 ? timeArr[3] : '0' + timeArr[3]}
        </div>
        <button class="timerZone__savedTime-X">X</button>
    </div>
    ` + document.querySelector('#savedTimeList').innerHTML;
}

let reset = () => {
    if (timerId) { clearInterval(timerId); timerId = 0;}
    for (let i = 0; i <= 3; i++) timeArr[i] = 0;
    time.innerHTML = '00:00:00:00';
}

let close = (e) => {
    if (e.target.classList.contains('timerZone__savedTime-X')) {
        e.target.closest('.timerZone__savedTime').remove();
    }
}


startButton.onclick = start;

stopButton.onclick = stop;

saveButton.onclick = save;

resetButton.onclick = reset;

document.querySelector('#savedTimeList').onclick = close;