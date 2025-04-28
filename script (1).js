function validateForm() {
    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Check if the username is empty
    if (username === "") {
        alert("Username cannot be empty!");
        return false;  // Prevent form submission
    }

    // Check if the password is empty
    if (password === "") {
        alert("Password cannot be empty!");
        return false;  // Prevent form submission
    }

    // Simple password validation (at least 6 characters)
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return false;  // Prevent form submission
    }

    // If both fields are valid, show a success message
    alert("Login successful!");
    return true;  // Allow form submission
}
