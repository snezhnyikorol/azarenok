<?php

$message = 'Данные: '."\r\n";

$email = "raketskij@gmail.com";

function formatstr($str) 
{ 
$str = trim($str); 
$str = stripslashes($str); 
$str = htmlspecialchars($str); 
return $str; 
} 



$name = formatstr($_POST['name']);
$phone = formatstr($_POST['phone']);
$form = formatstr($_POST['form']);
$mail = formatstr($_POST['mail']);

$comment = "";


$utm_source = formatstr($_POST['utm_source']);
$utmMedium = formatstr($_POST['utm_medium']);
$utmContent = formatstr($_POST['utm_content']);
$utmCampaign = formatstr($_POST['utm_campaign']);

if ($mail == "") {
    $message .='Имя: '.$name."\r\n"."Телефон: ".$phone."\r\n"."Форма: ".$form."\r\n";
} else {
    $message .='Имя: '.$name."\r\n"."Телефон: ".$phone."\r\n"."Почта: ".$mail."\r\n"."Форма: ".$form."\r\n";
}

 
/* UTM */
if (isset($_POST['utm_medium'])) {$utm_medium = $_POST['utm_medium'];}
if (isset($_POST['utm_source'])) {$utm_source = $_POST['utm_source'];}
if (isset($_POST['utm_campaign'])) {$utm_campaign = $_POST['utm_campaign'];}
if (isset($_POST['utm_term'])) {$utm_term = $_POST['utm_term'];}
if (isset($_POST['utm_content'])) {$utm_content = $_POST['utm_content'];}

$utm_medium = stripslashes($utm_medium);
$utm_medium = htmlspecialchars($utm_medium);
$utm_source = stripslashes($utm_source);
$utm_source = htmlspecialchars($utm_source);
$utm_campaign = stripslashes($utm_campaign);
$utm_campaign = htmlspecialchars($utm_campaign);
$utm_term = stripslashes($utm_term);
$utm_term = htmlspecialchars($utm_term);
$utm_content = stripslashes($utm_content);
$utm_content = htmlspecialchars($utm_content);

$message .= "Информация:\r\n";
$message .= "IP: ".$_SERVER["REMOTE_ADDR"]."\r\n";
$message .= "Канал трафика: ".$utm_source."\r\n";
$message .= "Тип трафика: ".$utm_medium."\r\n";
$message .= "Ключевое слово: ".$utm_term."\r\n";
$message .= "Контент: ".$utm_content."\r\n";
$message .= "Кампания: = ".$utm_campaign."\r\n";
 
mail ($email, "Заказ билетов", $message);

?>