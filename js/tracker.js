var xhttp = new XMLHttpRequest();

$(document).ready(function() {  
               xhttp.onreadystatechange = function() {
                 if (this.readyState == 4 && this.status == 200) {
                     var data = JSON.parse(xhttp.responseText);
                    $("#curinv")[0].html=data;
                 };
document.getElementById('curinv').innerHTML='trying';
updateInvasions();
});

  function updateInvasions() {
               document.getElementById('curinv').innerHTML='opening';
                 xhttp.open("GET", "https://corporateclash.net/api/v1/districts", true);
               document.getElementById('curinv').innerHTML='sending';
                 xhttp.send();
             }
  }
