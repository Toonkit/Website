var xhttp = new XMLHttpRequest();

$(document).ready(function() {
    if ($("#districts")[0]) {
        initDistricts();
        updateStats();
        setInterval(() => updateStats(), 60000);
    }
});

function updateStats() {
    $("#districts").html('');
    xhttp.open("GET", "https://corporateclash.net/api/v1/districts?_=" + new Date().getTime(), true);
    xhttp.send();
}

function initDistricts() {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var element = $("#districts")[0];
            var data = JSON.parse(xhttp.responseText);
            $.each(data, function(i, o) {
                    var newElement =
                        `<div id="${i%2==0?'card-left':'card-right'}" style="text-align:center">
                          <h2>${o.name}</h3> 
                          <h3><b style="color:${o.online?'#08cb08':'red'}">${o.online?'Online':'Offline'}</b></h3>
                          <h3>${o.population} Toons</h3>
                        </div>`;
                    element.insertAdjacentHTML('beforeend', newElement);
            });
        };
    };
};