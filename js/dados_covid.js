function  dados_covid_global() {
    
   
      $.ajax({
      url: "https://api.covid19api.com/summary",
      type: "get",
      beforeSend: function() {
        //$("#" + formName).html(preloaderAzul);
      },
      success: function(response) {
       console.log(response);
       console.log(response.Global.NewConfirmed);
       console.log(response.Countries[23]);

      var global_new = response.Global.NewConfirmed;
     document.getElementById("ninfectados").innerHTML = global_new ;

      var global_total = response.Global.TotalConfirmed;
      document.getElementById("tinfectados").innerHTML = global_total ;
      var new_deth = response.Global.NewDeaths;
      document.getElementById("nmortes").innerHTML = new_deth ;
      var total_death = response.Global.TotalDeaths;
     document.getElementById("tmortes").innerHTML = total_death ;

      var new_recoverd = response.Global.NewRecovered;
      console.log(response.Global.NewRecovered);
      document.getElementById("nrecuperados").innerHTML =  new_recoverd;
      var total_recoverd = response.Global.TotalRecovered;
      document.getElementById("recuperados").innerHTML =  total_recoverd;
      //ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      var global_new = response.Countries[23].NewConfirmed;
      document.getElementById("bninfectados").innerHTML = global_new ;
   
       var global_total = response.Countries[23].TotalConfirmed;
       document.getElementById("btinfectados").innerHTML = global_total ;
       var new_deth = response.Countries[23].NewDeaths;
       document.getElementById("bnmortes").innerHTML = new_deth ;
       var total_death = response.Countries[23].TotalDeaths;
      document.getElementById("btmortes").innerHTML = total_death ;
   
       var new_recoverd = response.Countries[23].NewRecovered;
       console.log(response.Global.NewRecovered);
       document.getElementById("bnrecuperados").innerHTML =  new_recoverd;
       var total_recoverd = response.Countries[23].TotalRecovered;
       document.getElementById("brecuperados").innerHTML =  total_recoverd;



       

      },
    });
  

}
function dados_covid_estado() {
  var estado = document.getElementById("estados").value
  estado = estado.toLowerCase();
  console.log(estado);
  $.ajax({
    url: "https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/"+estado,
    type: "get",
    beforeSend: function() {
      //$("#" + formName).html(preloaderAzul);
    },
    success: function(response) {
     console.log(response);
    
   var negativo = response.refuses;
   document.getElementById("enegativo").innerHTML = negativo;
   var suspeito = response.suspects
   document.getElementById("esuspeitos").innerHTML = suspeito;
   var casos = response.cases;
   document.getElementById("ecases").innerHTML = casos;
   var mortes = response.deaths;
   document.getElementById("emortes").innerHTML = mortes;
   var estado = response.state;
   document.getElementById("estado").innerHTML = estado;




     

    },
  });

  

}