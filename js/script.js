
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


