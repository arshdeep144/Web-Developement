$(document).ready(function () {


  $('button#goButton').click(function() {
    showMap();
    downloadWeather();
    downloadForecast();
  });

  function showMap () {

    var lat = document.getElementById('lat').value;
    var long = document.getElementById('lon').value;

    console.log("Showing Map");
    var myOptions = {
      zoom: 8,
      center: new google.maps.LatLng(lat, long),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById('map-canvas'),
    myOptions);
    document.getElementById('map-canvas').style.display="block";
  };

  function downloadWeather() {

    var lat = document.getElementById('lat').value;
    var long = document.getElementById('lon').value;

    document.getElementById('weather').style.display="block";

    console.log("Downloading Weather");

    var url = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+
    "&lon="+long+"&units=metric&APPID=6fab770060ef946f2b80bde294fcaa97";

    $.getJSON(url, function(data){

      var weatherbox = $('<div id="weatherBox">');
      $('#weather').html('');
      var tempHead = $('<h4>Temperature</h4>');
      var currentDiv = $('<div id="currentTemp">Current: '+data.main.temp_min+
                                                        '&#8451; </div>');
      var lowDiv = $('<div id="lowTemp">Low: '+data.main.temp_max+'&#8451;</div>');
      var highDiv = $('<div id="highTemp">High: '+data.main.temp_max+'&#8451; </div>');

      tempHead.append(currentDiv);
      tempHead.append(lowDiv);
      tempHead.append(highDiv);
      weatherbox.append(tempHead);

      var outlookHead = $('<h4>Outlook</h4>');
      var lookoutDiv;
      $.each(data.weather, function(i,item) {
          lookoutDiv = $('<div id="lookout">'+item.description+'</div>');
       });


      outlookHead.append(lookoutDiv);
      weatherbox.append(outlookHead);

      var windHead = $('<h4>Wind</h4>');
      var directionDiv = $('<div id="direction">Direction: '+data.wind.deg+'&deg; </div>');
      var speedDiv = $('<div id="speed">Speed: '+data.wind.speed+'m/s </div>');

      windHead.append(directionDiv);
      windHead.append(speedDiv);
      weatherbox.append(windHead);

      var pressureHead = $('<h4>Pressure</h4>');
      var pressDiv = $('<div id="pressure">'+data.main.pressure+'hPa</div>');

      pressureHead.append(pressDiv);
      weatherbox.append(pressureHead);

      var humidHead = $('<h4>Humidity</h4>');
      var humidDiv = $('<div id="humidity">'+data.main.humidity+'%</div>');

      humidHead.append(humidDiv);
      weatherbox.append(humidHead);

       $('#weather').append(weatherbox);
    });
  };

  function downloadForecast() {

    var lat = document.getElementById('lat').value;
    var long = document.getElementById('lon').value;

    console.log("Downloading Forecast");

    $('.table').remove();
    var url = "http://api.openweathermap.org/data/2.5/forecast/daily?cnt=10&mode=xml&lat="
    +lat+"&lon="+long+"3&units=metric&APPID=6fab770060ef946f2b80bde294fcaa97";

    $.get(url, function(data){

      $(data).find('forecast').each(function (index, forecast){

      var table = $('<table class="table">');
      var thead = $('<thead>');
      table.append(thead);
      var headerRow = $('<tr>');
      thead.append(headerRow);

      var dateHeader = $('<th>').text('Date');
      headerRow.append(dateHeader);

      var symbolHeader = $('<th>').text('Symbol');
      headerRow.append(symbolHeader);

      var maxHeader = $('<th>').text('High');
      headerRow.append(maxHeader);

      var minHeader = $('<th>').text('Low');
      headerRow.append(minHeader);

      var windHeader = $('<th>').text('Wind');
      headerRow.append(windHeader);

      var cloudsHeader = $('<th>').text('Clouds');
      headerRow.append(cloudsHeader);

      var tbody = $('<tbody>');
      table.append(tbody);

        var time = $(forecast).find('time').each(function () {
          //time day
          var date = $(this).attr('day');
          //symbol
          var symbol = $(this).find('symbol').attr('number');
          //temp_max
          var temp_max = $(this).find('temperature').attr('max');
          //temp_min
          var temp_min = $(this).find('temperature').attr('min');
          //windspeed_name
          var windspeed = $(this).find('windSpeed').attr('name');
          //clouds_value
          var value = $(this).find('clouds').attr('value');

          var tr = $('<tr>');
          tbody.append(tr);

          var dateTd = $('<td>').text(date);
          tr.append(dateTd);

          var symTd = $('<td id="pic">').html("<img src='images/" + symbol +".png'>");
          tr.append(symTd);

          var maxTd = $('<td>').text(temp_max);
          tr.append(maxTd);

          var minTd = $('<td>').text(temp_min);
          tr.append(minTd);

          var windTd = $('<td>').text(windspeed);
          tr.append(windTd);

          var valueTd = $('<td>').text(value);
          tr.append(valueTd);
        });
        $('#forecast').append(table);
      });
    });
  };
});
