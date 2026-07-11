<?php
function loadEnv($path) {
    if (!file_exists($path)) return;
    $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        if (strpos(trim($line), '#') === 0) continue;
        $parts = explode('=', $line, 2);
        if (count($parts) < 2) continue;
        $name = trim($parts[0]);
        $value = trim($parts[1]);
        putenv("$name=$value");
        $_ENV[$name] = $value;
    }
}

// Try to load .env from the same directory as this script
loadEnv(__DIR__ . '/.env');

try {
    if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        throw new Exception('Invalid request method');
    }

    if (!isset($_POST['name'], $_POST['email'], $_POST['message'])) {
        throw new Exception('Missing form fields');
    }

    $email = filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL);
    if ($email === false || preg_match('/[\r\n]/', $email)) {
        throw new Exception('Invalid email address');
    }

    $name = trim(strip_tags($_POST['name']));
    $message = trim(strip_tags($_POST['message']));

    if ($name === '' || $message === '') {
        throw new Exception('Name and message are required');
    }

    $recipient = getenv('MAIL_RECIPIENT') ?: ($_ENV['MAIL_RECIPIENT'] ?? '');
    if (empty($recipient)) {
        throw new Exception('Recipient email is not configured');
    }

    $subject = "Message from Magda Chudzik's developer portfolio";
    $formcontent = "From: {$name}\n\nMessage:\n{$message}";
    $mailheader = "From: {$email}\r\nReply-To: {$email}\r\nContent-Type: text/plain; charset=UTF-8\r\n";

    if (!mail($recipient, $subject, $formcontent, $mailheader)) {
        throw new Exception('Error sending email');
    }

    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => true, 'redirect' => 'https://dev.magdachudzik.pl/thankyoupage']);
    exit;
} catch (Exception $e) {
    http_response_code(400);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['ok' => false, 'error' => $e->getMessage()]);
    exit;
}
?>
