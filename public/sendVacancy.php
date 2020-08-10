<?php
$to = "<16webmail@gmail.com>";
$name = $_POST['name'];
$email = $_POST['email'];
$myfile = $_POST['myfile'];
$subject = "Заявка на вакансию";
$message = ' <p>Заявка на обратный звонок от посетителя:</p> </br> <b>Имя: '.$name.', </b> </br><i>Почта: '.$email.'</i> </br>';

$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: Заявка на обратный звонок <from@16-web.com>\r\n";
$headers .= "Reply-To: reply-to@example.com\r\n";

if (!empty($subject) && !empty($message)) {
    $result = mail($to, $subject, $message, $headers);
}
if ($result) {
    echo 'Сообщение успешно отправлено! Вы можете закрыть это сообщение.' . $name . ' ' . $email . ' ' . $myfile;
} else {
    echo 'Сообщение не отправлено! Попробуйте еще раз.' . $name . ' ' . $email . ' ' .$myfile;
}