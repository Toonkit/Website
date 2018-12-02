var xhttp = new XMLHttpRequest();
var once = false;
$(document).ready(function() {
    if ($("#curinv")[0]) {
        initInvasions();
        updateStats();
    }
});

function updateStats() {
    $("#curinv").html('');
    // xhttp.open("GET", "https://corporateclash.net/api/v1/districts?_=" + new Date().getTime(), true);
    xhttp.open("GET", "https://corporateclash.net/api/v1/districts.js");
    xhttp.send();
    setInterval(() => updateStats(), 60000);
}

function initInvasions() {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var element = $("#curinv")[0];
            var data = JSON.parse(xhttp.responseText);
            var noinv = true;
            $.each(data, function(i, o) {
                // if (o.cogs_attacking != 'None' && Math.round(o.remaining_time)!=0) {
                if (o.cogs_attacking != 'None') {  // Mega invasions broke second condition check
                    noinv = false;
                    var newElement =
                        `<div class="cog-card">
                          <h2 style="text-align: center;">${o.cogs_attacking}</h3>
                          <div class="cog-card-inner">
                            <img draggable="false" class="cog" src="https://toonkit.net/static/images/cogs/${o.cogs_attacking.toLowerCase().replace(/ /g,'_')}.png">
                            <div style="text-align: center; width: 100%;">
                              <h3>${o.name}</h3>
                              <p style="font-size:12px;">${o.count_total-o.count_defeated} / ${o.count_total} Cogs<br/>
                                  <b>${Math.round(o.remaining_time/60)}</b> minutes remaining</p>
                            </div>
                          </div>
                        </div>`;
                    element.insertAdjacentHTML('beforeend', newElement);
                    // For testing purposes, duplicate elements to populate
                    // for (i=0; i < 1; i++) {
                    //     element.insertAdjacentHTML('beforeend', newElement);
                    // }
                }
            });
            if (noinv) {
                $("#noinv").show();
            }
            else {
                $("#noinv").hide();
                // Use Cog silhouette image if regular image missing
                $(".cog").on("error", function() {
                    $(this).attr('src', 'https://toonkit.net/static/images/cogs/1_unknown_cog.png');
                });
            }
        }
    }
}
