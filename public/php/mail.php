<?php
$env = parse_ini_file(__DIR__ . '/../.env');
header('Content-Type: application/json; charset=utf-8');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . '/phpmailer/src/Exception.php';
require __DIR__ . '/phpmailer/src/PHPMailer.php';
require __DIR__ . '/phpmailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'], $_POST['message'], $_POST['email'])) {

    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
    if (!$email) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Invalid email format']);
        exit;
    }

    $name = htmlspecialchars(trim($_POST['name']));
    $message = htmlspecialchars(trim($_POST['message']));
    $recipient = $env['MAIL_TO'] ?? '';
    $subject = "[DEV PORTFOLIO] Message from contact form";
    $formcontent = "Name: $name\n";
    $formcontent .= "Email: $email\n\n";
    $formcontent .= "Message:\n$message\n";

    $mail = new PHPMailer(true);

    try {
        $mail->isSMTP();
        $mail->Host       = $env['MAIL_HOST'] ?? '';
        $mail->SMTPAuth   = true;
        $mail->Username   = $env['MAIL_USER'] ?? '';
        $mail->Password   = $env['MAIL_PASS'] ?? '';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = $env['MAIL_PORT'] ?? 587;
        $mail->CharSet    = 'UTF-8'; 
        $mail->setFrom($env['MAIL_FROM'] ?? '', 'magdachudzik.pl');
        $mail->addAddress($recipient);
        $mail->addReplyTo($email, $name);
        $mail->isHTML(false); 
        $mail->Subject = $subject;
        $mail->Body    = $formcontent;
        $mail->send();
        echo json_encode(['ok' => true]);

    } catch (Exception $e) {
        error_log($mail->ErrorInfo); 
        http_response_code(500);
        echo json_encode(['ok' => false, 'error' => 'Email could not be sent. Please try again later.']);
    }

} else {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method Not Allowed or missing data.']);
}