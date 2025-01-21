// Function to check if the password and confirm password match
function checkPasswordMatch() {
    // Get the password and confirm password values from input fields
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    
    // Check if the passwords match
    if (password === confirmPassword) {
      console.log("Password Matched. Password validation Successful.");
    } else {
      console.log("Password didn't match. Password validation unsuccessful");
    }
  }
  document.getElementById("submitButton").addEventListener("click", checkPasswordMatch);