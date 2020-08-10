<?php
// Файлы phpmailer
require 'PHPMailer.php';
require 'SMTP.php';
require 'Exception.php';
// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$tel = $_POST['tel'];
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $msg = "ok";
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера GMAIL
    $mail->Username   = 'alexflorik30031992'; // Логин на почте
    $mail->Password   = 'c855d6a211ddb13e204033asd'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('alexflorik30031992@gmail.com', 'Alex'); // Адрес самой почты и имя отправителя
    // Получатель письма
    $mail->addAddress('aleksey.florya@gmail.com');
    // $mail->addAddress('testhalal2017@gmail.com'); Ещё один, если нужен
    // Прикрипление файлов к письму

    // -----------------------
    // Само письмо
    // -----------------------
    $mail->isHTML(true);

    $mail->Subject = 'Заголовок письма';
    $mail->Body    = "<b>Имя:</b> $name <br>
        <b>Телефон:</b> $tel<br>";
// Проверяем отравленность сообщения
    if ($mail->send()) {
        echo "$msg";
    } else {
        echo "Сообщение не было отправлено. Неверно указаны настройки вашей почты";
    }
} catch (Exception $e) {
    echo "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}