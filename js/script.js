
$(window).on('load', function () {
    if ($('#preloader').length) {
    $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
    });
    }
});

$('#btn1').click(function() {

    $.ajax({
        url: "php/getTimezoneInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: 47.01,
            lng: 10.2
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#').html(result['data'][0]['']);
                

            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("There has been an error!")
        }
    }); 

});

$('#btn2').click(function() {

    $.ajax({
        url: "php/getEarthquakeInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#QuakeNorth').val(),
            south: $('#QuakeSouth').val(),
            east: $('#QuakeEast').val(),
            west: $('#QuakeWest').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {
                $('#cell1').html("Magnitude:");
                $('#cell2').html(result['data'][0]['magnitude']);
                $('#cell3').html("Date and Time:");
                $('#cell4').html(result['data'][0]['datetime']);
                $('#cell5').html("Depth:");
                $('#cell6').html(result['data'][0]['depth']);
                $('#cell7').html("Magnitude:");
                $('#cell8').html(result['data'][1]['magnitude']);
                $('#cell9').html("Date and Time:");
                $('#cell10').html(result['data'][1]['datetime']);
                $('#cell11').html("Depth:");
                $('#cell12').html(result['data'][1]['depth']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("There has been an error!")
        }
    }); 

});

$('#btn3').click(function() {

    $.ajax({
        url: "php/getWeatherInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            north: $('#WeatherNorth').val(),
            south: $('#WeatherSouth').val(),
            east: $('#WeatherEast').val(),
            west: $('#WeatherWest').val(),
        },
        success: function(result) {

            console.log(result);

            if (result.status.name == "ok") {

                $('#cell1').html("Station Name:");
                $('#cell2').html(result['data'][0]['stationName']);
                $('#cell3').html("Date and Time:");
                $('#cell4').html(result['data'][0]['datetime']);
                $('#cell5').html("Weather Condition:");
                $('#cell6').html(result['data'][0]['weatherCondition']);
                $('#cell7').html("Cloud Type:");
                $('#cell8').html(result['data'][0]['clouds']);
                $('#cell9').html("Temperature:");
                $('#cell10').html(result['data'][0]['temperature']);
                $('#cell11').html("Humidity:");
                $('#cell12').html(result['data'][0]['humidity']);
            }
        
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("There has been an error!")
        }
    }); 

});



