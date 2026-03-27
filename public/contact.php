<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get JSON input
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (!$data) {
        echo json_encode(["status" => "error", "message" => "Invalid data"]);
        exit;
    }

    $name = strip_tags(trim($data["name"]));
    $email = filter_var(trim($data["email"]), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($data["phone"]));
    $subject_category = strip_tags(trim($data["subject"]));
    $message = strip_tags(trim($data["message"]));

    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        echo json_encode(["status" => "error", "message" => "Please fill in all required fields correctly."]);
        exit;
    }

    $to = "support@crosscityhelp.com";
    $email_subject = "New Strategic Intake: $subject_category";
    
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n";
    $email_content .= "Subject: $subject_category\n\n";
    $email_content .= "Technical Requirements:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion();

    if (mail($to, $email_subject, $email_content, $headers)) {
        echo json_encode(["status" => "success", "message" => "Technical request transmitted. A senior partner will contact you shortly."]);
    } else {
        echo json_encode(["status" => "error", "message" => "Transmission failure. Internal server error."]);
    }
} else {
    echo json_encode(["status" => "error", "message" => "Method not allowed"]);
}
?>
