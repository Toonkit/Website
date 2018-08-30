var xhttp = new XMLHttpRequest();

$(document).ready(function() {
    if ($("#curinv")[0]) {
        initInvasions();
        updateStats();
    }
});

function updateStats() {
    $("#curinv").html('');
    xhttp.open("GET", "https://corporateclash.net/api/v1/districts?_=" + new Date().getTime(), true);
    xhttp.send();
    setInterval(() => updateStats(), 60000);
}

function initInvasions() {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var element = $("#curinv")[0];
            var data = JSON.parse(xhttp.responseText);
            var noinv = true;
            var indx = 0;
            $.each(data, function(i, o) {
                if (o.cogs_attacking != 'None' && Math.round(o.remaining_time)!=0) {
                    noinv = false;
                    var newElement =
                        `<div class="cog-card">
                          <img draggable="false" class="cog" src="http://100.115.92.197:5000/static/images/cogs/${o.cogs_attacking.toLowerCase().replace(/ /g,'_')}.png">
                          <h2>${o.cogs_attacking}</h2>
                          <h3>${o.name}</h3>
                          <p style="font-size:12px">${o.count_total-o.count_defeated}/${o.count_total} Cogs | <b>${Math.round(o.remaining_time/60)}</b> minutes remaining</p>
                        </div>`;
                    for (i=0; i < 7; i++) {
                        element.insertAdjacentHTML('beforeend', newElement);
                    }
                    indx++;
                }
            });
            if (noinv) {
                $("#noinv").show();
            }
            else {
                $("#noinv").hide();
                // Use Cog silhouette image if regular image missing
                $(".cog").on("error", function() {
                    $(this).attr('src', 'http://100.115.92.197:5000/static/images/cogs/1_unknown_cog.png');
                });
            }
        }
    }
}
