(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;  // add a zero in front of numbers<10
    }

    // Time
    function startTime() {
        var today = new Date(), // get current date and time
            h = checkTime(today.getHours()), // get hour
            m = checkTime(today.getMinutes()), // get minute
            s = checkTime(today.getSeconds()); // get second
            time = h.toString() + m.toString(); // get time in string form like 2123 for 9:23PM so that it's easier to use in if statements
        
        document.getElementById('time').innerHTML = h + ":" + m + ":" + s; // display time 12:34:56


        // Change colors based on time zone
        // Entertainment
        if((time >= 1000 && time < 1030) || (time >= 1200 && time < 1300) || (time >= 1800 && time < 1900)) {
        document.body.className = "entertainment";
        } 
        // Family
        if(zones.family) {
        document.body.className = "family";
        }
        // Learn
        if((time >= 1300 && time < 1400) || (time >= 2130 && time < 2200)) {
        document.body.className = "learn";
        } 
        // Personal
        if((time >= 0600 && time < 0630) || (time >= 1500 && time < 1600) || (time >= 2200 && time < 2230)) {
        document.body.className = "personal";
        } 
        // Sleep
        if(time >= 2300) { // if it's 11PM or later, i'm asleep
        document.body.className = "sleep";
        }
        // Solitude
        if((time >= 0630 && time < 0700) || (time >= 2230 && time < 2300)) {
        document.body.className = "solitude";
        }
        // Work
        if((time >= 1030 && time < 1200) || (time >= 2100 && time < 2130)) {
        document.body.className = "work";
        }        
        
        // Refresh clock every minute
        t = setTimeout(function () { // setTimeout() calls a function or executes a code after a specified delay
            startTime()
        }, 1000); // 1m = 60000ms, 1s = 1000ms. settimeout() takes values in miliseconds
    }
    startTime();
})();

/* Sources
**********
http://www.plus2net.com/javascript_tutorial/clock.php
http://jsfiddle.net/cse_tushar/fKKSb/311/