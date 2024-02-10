<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get user input
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Perform basic validation (you should enhance this with proper validation and security measures)
    if (!empty($email) && !empty($password)) {
        // Assuming you have a database connection, perform the login check here
        // Replace the following code with your actual login logic
        $isValidUser = true; // Example: Check if user credentials are valid

        if ($isValidUser) {
            // Redirect to the dashboard if login is successful
            header("Location: dashboard.html");
            exit();
        } else {
            // Redirect back to the login page with an error message
            header("Location: login.html?error=InvalidCredentials");
            exit();
        }
    }
}
?>
