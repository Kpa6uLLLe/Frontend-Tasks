<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';
require 'PHPMailer/src/Exception.php';

$name = test_input($_POST['name']);
$tel = test_input($_POST['tel']);
$email = test_input($_POST['email']);

$mail = new PHPMailer();
$mail->CharSet = 'UTF-8';

// Создаем письмо
$mail = new PHPMailer();
$mail->isSMTP();                   // Отправка через SMTP
$mail->Host   = 'smtp.yandex.ru';  // Адрес SMTP сервера
$mail->SMTPAuth   = true;
$mail->Username   = '******';       //имя пользователя (без домена и @)
$mail->Password   = '******';    // ваш пароль(пароль для stmp в яндексе, https://id.yandex.ru/security/app-passwords)
$mail->SMTPSecure = 'ssl';
$mail->Port   = 465;

$mail->setFrom('******', 'noreply@mydomain.com');
$mail->addAddress('******', '');

$mail->Subject = "$name оставил(а) заявку на сайте"; //тема
$mail->msgHTML("<html><body>
                <h1>Имя: $name</h1>
                <p>Телефон: $tel</p>
                <p>Эл.Почта: $email</p>
                </html></body>");
// Отправляем
if ($mail->send()) {
  echo 'Письмо отправлено!';
} else {
  echo 'Ошибка: ' . $mail->ErrorInfo;
}
function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
<div class="back">
<a href="../">Вернуться на главную </a>
</div>
