// https://www.speedrun.com/api/v1/leaderboards/nd2zw3d0/category/w20p8lok?var-onvo458m=5lenx7zl&top=10&embed=players
// Game id for "ttr": "nd2zw3d0"
// Category id for "Toontown_Central_Toontasks": "w20p8lok"
// Api variable for solo or co-op option: onvo458m
// Api variable for solo runs: 5lenx7zl

const xhttp = new XMLHttpRequest();

function getLeaderboards() {
    xhttp.open("GET", "https://www.speedrun.com/api/v1/leaderboards/nd2zw3d0/category/w20p8lok?var-onvo458m=5lenx7zl&top=10&embed=players");
    xhttp.send();    
}

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        const {runs, players} = JSON.parse(xhttp.responseText).data;
        let runData, playerName, place, run, time;
        for (i = 0; i < runs.length; i++) {
            ({ place, run } = runs[i]);
            playerName = players.data[i].names.international;
            time = parseTime(run.times.primary);
            runData = {
                place: place,
                playerName: playerName,
                time: time
            }
            renderRun(runData);
        }
    }
}

function parseTime(rawTime) {
    let hours = rawTime.match(/[0-9]{1,2}(?=H)/)[0];
    let minutes = rawTime.match(/[0-9]{1,2}(?=M)/)[0];
    let seconds = rawTime.match(/[0-9]{1,2}(?=S)/)[0];
    return hours+'h '+minutes+'m '+seconds+'s';
}

function renderRun(o) {
    let element = 
    `<h3>${o.place}</h3>
     <h3>${o.playerName}</h3>
     <h3>${o.time}</h3>`;

    $('#root').append(element);
}


getLeaderboards();
