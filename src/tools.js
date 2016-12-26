/**
 * upgrade from original jQuery version. total 3 versions:
 * - jQuery
 * - Angular V1
 * - React
 */

let timer = 0;
let isPaused = false;

export const timeCalculater = () => {

    let seconds, minutes, hours, divider = 60, currentTimeString;
    seconds = minutes = hours = currentTimeString = 0;

    const displayAt = document.querySelector('.timer');

    timer = setInterval(() => {

        if (!isPaused) {
            seconds++;
            minutes += Math.floor(seconds / divider);
            hours += Math.floor(minutes / divider);
            if (seconds % divider === 0) {
                seconds = 0;
            }
            if (minutes % divider === 0) {
                minutes = 0;
            }

            seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

            currentTimeString = [
                hours ? (hours + ":") : '',
                minutes ? (minutes + ":") : '',
                seconds
            ].join('');

            displayAt.innerHTML = currentTimeString;
        }
    }, 1000);
};

export const stopTimer = () => {
    clearInterval(timer);

    const displayAt = document.querySelector('.timer');
    displayAt.innerHTML = '';
};

export const pauseTimer = flag => {
    isPaused = flag;
};