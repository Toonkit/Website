var xhttp = new XMLHttpRequest();

$(document).ready(function() {
    if ($("#districts")[0])
        initDistricts();
    else if ($("#curinv")[0])
         initInvasions();
    updateStats();
    setInterval(()=>updateStats(),60000);
});

function updateStats() {
    $("#curinv").html('');
    $("#districts").html('');
    $("#servers").html('');
    xhttp.open("GET", "https://corporateclash.net/api/v1/districts?_=" + new Date().getTime(), true);
    xhttp.send();
}

function initDistricts() {
     xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var element = $("#districts")[0];
            var data = JSON.parse(xhttp.responseText);
            $.each(data, function(i, o) {
                    var newElement = `<div id="${i%2==0?'card-left':'card-right'}" style="text-align:center">
                <h2>${o.name}</h3> 
              <h3><b style="color:${o.online?'#08cb08':'red'}">${o.online?'Online':'Offline'}</b></h3>
            <h3>${o.population} Toons</h3>
 </div>`;
                    element.insertAdjacentHTML('beforeend', newElement);
            });
             //element = $("#servers")[0];
            //$.each(data, function(i, o) {
              //      var newElement = `<div id="card">
               // <h2>${o.name}</h3> 
              //<h3><b color="${o.online?'green':'red'">${o.online?'Online':'Offline'}</b></h3>
            //<h3>${o.population} Toons</h2>
// </div>`;
  //                  element.insertAdjacentHTML('beforeend', newElement);
    //        });
        }
    };
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
                    var newElement = `<div id="${indx%2==0?'card-left':'card-right'}">
<img draggable="false" class="cog" src="http://localhost:5000/static/images/cogs/${o.cogs_attacking.toLowerCase().replace(/ /g,'_')}.png">
                <h2>${o.cogs_attacking}</h2>
                <h3>${o.name}</h3>
                <p style="font-size:12px">${o.count_total-o.count_defeated}/${o.count_total} Cogs | <b>${Math.round(o.remaining_time/60)}</b> minutes remaining</p>
 </div>`;
                    element.insertAdjacentHTML('beforeend', newElement);
                    indx++;
                }
            });
            if (noinv) 
                $("#noinv").show();
            else 
                $("#noinv").hide();
            $(".cog").on("error", function() { // Use Cog silhouette image if regular image missing
                $(this).attr('src', '192.168.1.34:5000/static/images/cogs/1_unknown_cog.png');
            }
        }
    };
}

// <img draggable="false" class="cog" src="http://localhost:5000/static/images/cogs/1_unknown_cog.png">
// <img draggable="false" class="cog" src="http://localhost:5000/static/images/cogs/${o.cogs_attacking.toLowerCase().replace(/ /g,'_')}.png">
// <img draggable="false" class="cog" src="https://raw.githubusercontent.com/Toonkit/Website/master/assets/images/cogs/${o.cogs_attacking.toLowerCase().replace(/ /g,'_')}.png">