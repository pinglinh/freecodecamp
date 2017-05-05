function set_weather(data) {
  $(".location").text(
    data.name + ", " + data.sys.country
  );

  $(".temp").text(
    // JSON.stringify() // gets all the json
    "" + Math.floor(data.main.temp) + " °C"
  );

  var icon_to_font = {
  "01d": "wi-day-sunny",
  "01n": "wi-night-clear",
  "02d": "wi-day-cloudy",
  "02n": "wi-night-alt-cloudy",
  "03d": "wi-cloud",
  "03n": "wi-cloud",
  "04d": "wi-cloudy",
  "04n": "wi-cloudy",
  "09d": "wi-day-showers",
  "09n": "wi-night-alt-showers",
  "10d": "wi-day-rain",
  "10n": "wi-night-alt-rain",
  "11d": "wi-day-thunderstorm",
  "11n": "wi-night-alt-thunderstorm",
  "13d": "wi-day-snow",
  "13n": "wi-night-alt-snow",
  "50d": "wi-windy",
  "50n": "wi-windy",
  }

  var icon = data.weather[0].icon;
  var font_icon = icon_to_font[icon];

  // $(".weather-icon").attr("src", "http://openweathermap.org/img/w/"+icon+".png"
  // );
  $(".wi").attr("class", "wi " + font_icon);
}

$(document).ready(function() {
  var url = "http://api.openweathermap.org/data/2.5/weather?q=London,GB&units=metric&APPID=061f24cf3cde2f60644a8240302983f2&mode=json";
  $.getJSON(url, set_weather);
});

