// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener('load', function() {
    let takeOffButton = document.getElementById("takeoff");
    let landButton = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");
    let rocket = document.getElementById("rocket");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right =document.getElementById("right");
    rocket.style.bottom = "0px";
    rocket.style.right = "0px";
    rocket.style.position = "absolute";


    takeOffButton.addEventListener('click', function() {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "blue";
            document.getElementById("spaceShuttleHeight").innerHTML = 10000;
        }
    })

    landButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "Shuttle has landed.";
        document.querySelector("#shuttleBackground").style.backgroundColor = "green";
        document.getElementById("spaceShuttleHeight").innerHTML = 0;
    })

    abortMission.addEventListener('click', function() {
        response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            document.getElementById("flightStatus").innerHTML = "Mission aborted.";
            document.querySelector("#shuttleBackground").style.backgroundColor = "green";
            document.getElementById("spaceShuttleHeight").innerHTML = 0;
        }
    })

    up.addEventListener('click', function() {
        let movement = parseInt(rocket.style.bottom) + 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(document.getElementById("spaceShuttleHeight").innerHTML) + 10000;
    })

    down.addEventListener('click', function() {
        let movement = parseInt(rocket.style.bottom) - 10 + 'px';
        rocket.style.bottom = movement;
        spaceShuttleHeight.innerHTML = parseInt(document.getElementById("spaceShuttleHeight").innerHTML) - 10000;
    })

    left.addEventListener('click', function() {
        let movement = parseInt(rocket.style.right) + 10 + 'px';
        rocket.style.right = movement;
    })

    right.addEventListener('click', function() {
        let movement = parseInt(rocket.style.right) - 10 + 'px';
        rocket.style.right = movement;
    })

})


