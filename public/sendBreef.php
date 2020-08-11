<?php
$to = "<16webmail@gmail.com>";
$name = $_POST['name'];
$tel = $_POST['tel'];
$email = $_POST['email'];
$site = $_POST['site'];
$service = $_POST['service'];
$subject = "Заявка на просчет";

$message = "Заявка на просчет от посетителя:\r\n
Имя: " . $name . ",\r\n
Телефон: " . $tel . ",\r\n
Почта: " . $email . "\r\n
Сайт: " . $site . "\r\n
Услуга: " . $service . "\r\n";

$attachment = chunk_split(base64_encode(file_get_contents($_FILES['files']['tmp_name'])));
$filename = $_FILES['files']['name'];

$boundary =md5(date('r', time()));

$headers = "From: Заявка на просчет <from@16-web.com>\r\nReply-To: webmaster@example.com";
$headers .= "\r\nMIME-Version: 1.0\r\nContent-Type: multipart/mixed; boundary=\"_1_$boundary\"";

$message="This is a multi-part message in MIME format.

--_1_$boundary
Content-Type: multipart/alternative; boundary=\"_2_$boundary\"

--_2_$boundary
Content-Type: text/plain; charset=\"iso-8859-1\"
Content-Transfer-Encoding: 7bit

" . $message . "

--_2_$boundary--
--_1_$boundary
Content-Type: application/octet-stream; name=\"$filename\" 
Content-Transfer-Encoding: base64 
Content-Disposition: attachment 

$attachment
--_1_$boundary--";

if (!empty($subject) && !empty($message)) {
    $result = mail($to, $subject, $message, $headers);
}
if ($result) {
    echo 'Сообщение успешно отправлено! Вы можете закрыть это сообщение.' . $name . ' ' . $email . ' ' . $service;
} else {
    echo 'Сообщение не отправлено! Попробуйте еще раз.' . $name . ' ' . $email . ' ' .$service;
}