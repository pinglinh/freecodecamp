function set_weather(data) {
  $(".location").text(
    // JSON.stringify()
    "" + data.main.temp + " C"
   );
  var icon = data.weather[0].icon;
  $(".weather-icon").attr("src", "http://openweathermap.org/img/w/"+icon+".png"
  );
}

$(document).ready(function() {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=London,GB&units=metric&APPID=061f24cf3cde2f60644a8240302983f2&mode=json";
  $.getJSON(url, set_weather);
});

