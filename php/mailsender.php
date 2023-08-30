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
$config = include('config.php');
$username = $config['username'];
$password = $config['password'];

send_mail(
  $username,
  "<html><body>
                  <h1>Имя: $name</h1>
                  <p>Телефон: $tel</p>
                  <p>Эл.Почта: $email</p>
                  </html></body>",
  "$name оставил(а) заявку на сайте"
);

send_mail(
  $email,
  "<html><body>
                  <h3>Благодарим вас за вашу заявку</h3>
                  <p>Мы приступили к её обработке, наши специалисты в скором времени свяжутся с вами.</p>
                  <p>Спасибо!</p>
                  </html></body>",
  "Вы оставили заявку на сайте mydomain.com"
);
   //(пароль для stmp в яндексе: https://id.yandex.ru/security/app-passwords)



function send_mail ($targetMail, $msgHTML, $subject) {
  global $username, $password, $name;
  $mail = new PHPMailer();
  $mail->CharSet = 'UTF-8';
  $mail->isSMTP();
  $mail->Host   = 'smtp.yandex.ru';
  $mail->SMTPAuth   = true;
  $mail->Username   = $username;
  $mail->Password   = $password;
  $mail->SMTPSecure = 'ssl';
  $mail->Port   = 465;
  $mail->setFrom($username, 'noreply@mydomain.com');
  $mail->addAddress($targetMail, $name);
  $mail->Subject = $subject;
  $mail->msgHTML($msgHTML);
  if (!$mail->send()) {
    echo 'Ошибка: ' . $mail->ErrorInfo;
  }
  return;
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
