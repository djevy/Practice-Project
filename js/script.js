
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
            north:44.1,
            south:-9.9,
            east:-22.4,
            west:55.2
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

$('#btn3').click(function() {

    $.ajax({
        url: "php/getWeatherInfo.php",
        type: 'POST',
        dataType: 'json',
        data: {
            
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


