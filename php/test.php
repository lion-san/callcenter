<?php
require "../vendor/twilio/sdk/Services/Twilio.php";
$http = new Services_Twilio_TinyHttp(
    'https://api.twilio.com',
    array('curlopts' => array(
        CURLOPT_SSL_VERIFYPEER => false,
        //CURLOPT_CAINFO => dirname(__FILE__) . '/cacert.pem',
    )));
$client = new Services_Twilio(
    "AC61e6d70fd202e5c5776168bc1b6165b6",
    "7e2833938114457766013c26310446bc",
    "2010-04-01",
    $http);
$xmlUrl = (empty($_SERVER["HTTPS"]) ? "http://" : "https://") . $_SERVER["HTTP_HOST"] . "/php/hello.php";
$message = $client->account->calls->create(
    "+81-50-3131-8520", // From (input your twilio number)
    "+81-80-6909-6886",  // To (input validated number, if trial)
    $xmlUrl
);
header('Content-type: text/plain; charset=utf-8');
echo "電話をかけました！";
?>