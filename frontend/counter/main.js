const targetDate =  new Date('2024-12-12T00:00:00').getTime();


function updateCountdown() {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;


    if (timeDifference > 0 ){
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);


        document.getElementById('days').textContent = days.toString().padStart(2, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    } else {
        document.querySelector(".countdown").innerHTML = "<h2>We are here!</h2>";
    }

}


setInterval(updateCountdown, 1000);

updateCountdown();