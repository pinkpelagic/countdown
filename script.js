const daysIH = document.getElementById('days')
const hoursIH = document.getElementById('hours')
const minutesIH = document.getElementById('minutes')
const secondsIH = document.getElementById('seconds')

const newYear = "1 Jan 2021";

function countdown()
{
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    let totalSeconds = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSeconds / (3600 * 24));

    totalSeconds = totalSeconds % (24 * 3600)

    const hours = Math.floor(totalSeconds /  3600);

    totalSeconds = totalSeconds % 3600;

    const minutes = Math.floor(totalSeconds / 60);

    totalSeconds = totalSeconds % 60;

    const seconds = Math.floor(totalSeconds);

    daysIH.innerHTML = days
    hoursIH.innerHTML = hours
    minutesIH.innerHTML = minutes
    secondsIH.innerHTML = seconds


}

countdown()

setInterval(countdown, 1000)