var xhttp = new XMLHttpRequest();

$(document).ready(function() {
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var element = $("#curinv")[0];
            var data = JSON.parse(xhttp.responseText);
            var noinv = true;
            $.each(data, function(i, o) {
                if (o.cogs_attacking != 'None' && Math.round(o.remaining_time)!=0) {
                    noinv = false;
                    var newElement = `<section id="${i%2!=0?'card-left':'card-right'}">
<img draggable="false" class="cog" src="https://toonhq.org/static/2.4.3/img/cogs/${o.cogs_attacking.toLowerCase().replace(/ /g,'_')}.png">
                <h2>${o.cogs_attacking}</h2>
                <h3>${o.name}</h3>
                <p>${o.count_defeated}/${o.count_total} Cogs | <b>${Math.round(o.remaining_time/60)}</b> minutes remaining</p>
 </section>`;
                    element.insertAdjacentHTML('beforeend', newElement);
                }
            });
            if (noinv) 
                $("#noinv")[0].show();
            else 
                $("#noinv")[0].hide();
        }
    };
    updateInvasions();
    setInterval(()=>updateInvasions(),60000);
});

function updateInvasions() {
    xhttp.open("GET", "https://corporateclash.net/api/v1/districts", true);
    xhttp.send();
}
