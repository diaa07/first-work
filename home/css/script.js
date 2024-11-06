document.addEventListener("DOMContentLoaded", function() {
    function animateCounter(id, start, end, duration) {
        let counter = document.getElementById(id);
        let range = end - start;
        let stepTime = Math.abs(Math.floor(duration / range));
        let startTime = new Date().getTime();
        let endTime = startTime + duration;
        let timer;

        function updateCounter() {
            let now = new Date().getTime();
            let remaining = Math.max((endTime - now) / duration, 0);
            let value = Math.round(end - (remaining * range));
            counter.innerHTML = value;
            if (value === end) {
                clearInterval(timer);
            }
        }

        timer = setInterval(updateCounter, stepTime);
        updateCounter();
    }

    animateCounter("counter1", 0, 1000, 1500); // Counter 1 from 0 to 1000 in 2 seconds
    animateCounter("counter2", 0, 100, 1500); // Counter 2 from 0 to 100 in 2 seconds
});
