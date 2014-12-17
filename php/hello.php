<?php
require "..//vendor/twilio/sdk/Services/Twilio.php";
$xml = new Services_Twilio_Twiml();
$xml->say('こんにちは', array('language' => 'ja-jp'));
header('Content-type: text/xml; charset=utf-8');
print $xml;
?>