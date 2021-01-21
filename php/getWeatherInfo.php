<?php

    $url='api.geonames.org/weatherJSON?formatted=true&=' . $_REQUEST[''] . '&username=djevyd&style=full';

    //CURL
    //1.Initalise a new cURL resource(ch= curl handle)
    $ch = curl_init();

    //2.Set options
    //set URL to send the request to:
    curl_setopt($ch, CURLOPT_URL, $url);

    //Return instead of outputting directly:
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);

    //Stop cURL from verifying the peer's certificate:
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);

    //3.Execute the request and fetch the response.
    $result = curl_exec($ch);

    //Check for errors:
        if($result === FALSE) {
            echo "cURL Error: " . curl_error($ch);
        }

    //4.Close cURL and free up the cURL handle
    curl_close($ch);

    $decode = json_decode($result, true);

?>