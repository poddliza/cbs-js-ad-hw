window.onload = function() {

    let timer = document.getElementById("time"),
        hours = document.getElementById("hours"),
        minutes = document.getElementById("minutes"),
        seconds = document.getElementById("seconds"),
        defaultTime = new Date(),
        timeCounter = function name() {
            if(defaultTime.getHours() < 24){
                defaultTime.setSeconds(defaultTime.getSeconds() + 1);

                hours.innerHTML = (defaultTime.getHours() < 10 ? '0' : '') + defaultTime.getHours();
                minutes.innerHTML = (defaultTime.getMinutes() < 10 ? '0' : '') + defaultTime.getMinutes();
                seconds.innerHTML = (defaultTime.getSeconds() < 10 ? '0' : '') + defaultTime.getSeconds();
            }else{
                resetTimer();
            }
        },
        counterInterval;

        defaultTime.setHours(0, 0, 0, 0);

    function startTimer() {
        counterInterval = setInterval(timeCounter, 0.1);
    }

    function stopTimer() {
        clearInterval(counterInterval);
    }

    function resetTimer() {
        clearInterval(counterInterval);

        defaultTime.setHours(0, 0, 0, 0);

        hours.innerHTML = "00";
        minutes.innerHTML = "00";
        seconds.innerHTML = "00";
    }

    let startTrigger = document.getElementById("start"),
        stopTrigger = document.getElementById("stop"),
        resetTrigger = document.getElementById("reset");


    startTrigger.addEventListener('click', () => {        
        startTimer();
    });

    stopTrigger.addEventListener('click', () => {        
        stopTimer();
    });

    resetTrigger.addEventListener('click', () => {        
        resetTimer();
    });
}