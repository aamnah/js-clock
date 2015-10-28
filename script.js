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

        // Define Zones
        var zones = {
            entertainment: (time >= 1000 && time < 1030) || (time >= 1200 && time < 1300) || (time >= 1800 && time < 1900),
            family: (time >= 1900 && time < 2100),
            learn: (time >= 1300 && time < 1400) || (time >= 2130 && time < 2200),
            personal: (time >= 0600 && time < 0630) || (time >= 1500 && time < 1600) || (time >= 2200 && time < 2230),
            sleep: (time >= 2300),
            solitude: (time >= 0630 && time < 0700) || (time >= 2230 && time < 2300),
            work: (time >= 1030 && time < 1200) || (time >= 2100 && time < 2130)  // 7:00 till 9:00 is missing, kept throwing error
        };

        // Change colors based on time zone
        // Entertainment
        if(zones.entertainment) {
            document.body.className = "entertainment";
            document.getElementById('zone').innerHTML = "Entertainment";
            document.getElementById('quote').innerHTML = 
            "Let's have fun some yo! <br / > Here are your <a href=\"http://followshows.com/\">TV shows</a>"; 
        } 
        // Family
        if(zones.family) {
            document.body.className = "family";
            document.getElementById('zone').innerHTML = "Family & Friends time!";
        }
        // Learn
        if(zones.learn) {
            document.body.className = "learn";
            document.getElementById('zone').innerHTML = "Learning & Long time investment" ;
            document.getElementById('quote').innerHTML = "An investment in <strong>knowledge</strong> pays the best interest. <em>Benjamin Franklin</em>";
        } 
        // Personal
        if(zones.personal) {
            document.body.className = "personal";
            document.getElementById('zone').innerHTML = "Personal" ;
        } 
        // Sleep
        if(zones.sleep) { // if it's 11PM or later, i'm asleep
            document.body.className = "sleep";
            document.getElementById('zone').innerHTML = "zZzzZzZz" ;
            document.getElementById('quote').innerHTML = "quote about sleeping.. zZzzZzZz" ;
        }
        // Solitude
        if(zones.solitude) {
            document.body.className = "solitude";
            document.getElementById('zone').innerHTML = "Solitude" ;
        }
        // Work
        if(zones.work) {
            document.body.className = "work";
            document.getElementById('zone').innerHTML = "Work" ;
        }        

        // Refresh clock every minute
        t = setTimeout(function () { // setTimeout() calls a function or executes a code after a specified delay
            startTime()
        }, 1000); // 1m = 60000ms, 1s = 1000ms. settimeout() takes values in miliseconds
    }
    startTime();
})();