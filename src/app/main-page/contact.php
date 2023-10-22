<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "azurofficial.co@gmail.com"; // Your email address
    $subject = "Contact Form Submission";
    $message = "First Name: " . $_POST["firstname"] . "\n";
    $message .= "Last Name: " . $_POST["lastname"] . "\n";
    $message .= "Email: " . $_POST["email"] . "\n";
    $message .= "Phone Number: " . $_POST["number"] . "\n";
    $message .= "Message:\n" . $_POST["subject"];
    
    // Send the email
    $headers = "From: " . $_POST["email"];
    mail($to, $subject, $message, $headers);
    
    // Redirect to a thank you page
    header("Location: thank_you.html"); // You should create a thank you page
} else {
    // Redirect back to the contact form if accessed directly
    header("Location:./main-page.component.html"); // You should create a contact form page
}
?>
