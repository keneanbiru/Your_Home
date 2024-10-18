
document.addEventListener("DOMContentLoaded", function () {
    var passwordInput = document.getElementById("password");
    var confirmPasswordInput = document.getElementById("confirm-password");

    // Add event listener to password input for length validation
    passwordInput.addEventListener("input", function () {
        validatePasswordLength();
    });

    // Add event listener to confirmPassword input for matching validation
    confirmPasswordInput.addEventListener("input", function () {
        validatePasswordMatch();
    });

    function validatePasswordLength() {
        var password = passwordInput.value;
        var passwordLengthMessage = document.getElementById("password-length-message");

        if (password.length >= 8) {
            passwordInput.setCustomValidity("");
            passwordLengthMessage.style.display = "none";
        } else {
            passwordInput.setCustomValidity("Password must be at least 8 characters");
            passwordLengthMessage.style.display = "block";
        }
    }

    function validatePasswordMatch() {
        var password = passwordInput.value;
        var confirmPassword = confirmPasswordInput.value;
        var confirmPasswordMessage = document.getElementById("confirm-password-message");

        if (password === confirmPassword) {
            confirmPasswordInput.setCustomValidity("");
            confirmPasswordMessage.style.display = "none";
        } else {
            confirmPasswordInput.setCustomValidity("Passwords must match");
            confirmPasswordMessage.style.display = "block";
        }
    }
});
