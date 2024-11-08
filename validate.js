// Utility function to add error messages
function setError(element, message) {
    const errorSpan = document.getElementById("error" + element.id.charAt(0).toUpperCase() + element.id.slice(1));
    errorSpan.textContent = message;
    element.classList.add("error");
}

// Utility function to clear error messages
function clearError(element) {
    const errorSpan = document.getElementById("error" + element.id.charAt(0).toUpperCase() + element.id.slice(1));
    errorSpan.textContent = "";
    element.classList.remove("error");
}

// Validate first and last names
function validateName(element) {
    const namePattern = /^[A-Za-z'-]+$/;
    if (!namePattern.test(element.value)) {
        setError(element, "Only letters, apostrophes, and dashes are allowed.");
    } else {
        clearError(element);
    }
}

// Validate Date of Birth
// Function to format the date as "Month Day, Year"
function formatDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    return today.toLocaleDateString('en-US', options);
}

// Display the current date in the banner
document.getElementById('current-date').textContent = "Today's Date: " + formatDate();


// Validate SSN format
function validateSSN() {
    const ssn = document.getElementById("ssn");
    const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
    if (!ssnPattern.test(ssn.value)) {
        setError(ssn, "Enter SSN in format XXX-XX-XXXX.");
    } else {
        clearError(ssn);
    }
}

// Validate Zip
function validateZip() {
    const zip = document.getElementById("zip");
    const zipPattern = /^\d{5}$/;
    
    if (!zipPattern.test(zip.value)) {
        setError(zip, "Zip code must be exactly 5 digits.");
    } else {
        clearError(zip);
    }
}

// Validate 'Have you been vaccinated?' checkbox
function validateVaccinated() {
    const vaccinatedCheckbox = document.getElementById("vaccinated");
    const vaccinatedError = document.getElementById("vaccinated-error");

    if (!vaccinatedCheckbox.checked) {
        vaccinatedError.textContent = "Please confirm your vaccination status.";
        vaccinatedError.style.color = "red";
    } else {
        vaccinatedError.textContent = "";  // Clear error if checked
    }
}

// Update Income Slider display
function updateIncomeDisplay() {
    const slider = document.getElementById("income-slider");
    const display = document.getElementById("income-display");
    display.textContent = `$${parseInt(slider.value).toLocaleString()}`;
}

// Validate email
function validateEmail() {
    const email = document.getElementById("email");
    email.value = email.value.toLowerCase();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
        setError(email, "Enter a valid email address.");
    } else {
        clearError(email);
    }
}

// Password and Confirm Password Validation
function validatePasswords() {
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorPassword = document.getElementById("errorPassword");
    const errorConfirmPassword = document.getElementById("errorConfirmPassword");

    // Clear previous error messages
    errorPassword.textContent = "";
    errorConfirmPassword.textContent = "";

    // Password validations
    if (password.length < 8) {
        setError(document.getElementById("password"), "Password must be at least 8 characters long.");
        return false;
    }
    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        setError(document.getElementById("password"), "Password must contain at least one uppercase letter and one number.");
        return false;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        setError(document.getElementById("confirm-password"), "Passwords do not match.");
        return false;
    }
    return true;
}

// Main Form Validation
function validateForm() {
    const isPasswordValid = validatePasswords();
    
    if (isPasswordValid) {
        document.getElementById("submitBtn").style.display = "inline";
    } else {
        document.getElementById("submitBtn").style.display = "none";
    }
}

// Overall form validation function
function validateFormOverall() {
    // Call each specific validation function
    validateName(document.getElementById("firstName"));
    validateName(document.getElementById("lastName"));
    validateDOB();
    validateSSN();
    validateEmail();
    validatePasswords(); // Call password validation as part of overall form validation

    // Check if there are any errors
    const errors = document.querySelectorAll(".error");
    if (errors.length === 0) {
        document.getElementById("submitButton").style.display = "block";
    } else {
        document.getElementById("submitButton").style.display = "none";
    }
}

// Event listeners for real-time validation
    document.getElementById('reviewFirstName').textContent = document.getElementById('firstName').value;
    document.getElementById('reviewLastName').textContent = document.getElementById('lastName').value;
    document.getElementById('reviewDOB').textContent = document.getElementById('dob').value;
    document.getElementById('reviewSSN').textContent = document.getElementById('ssn').value;
    document.getElementById('reviewAddress1').textContent = document.getElementById('address1').value;
    document.getElementById('reviewAddress2').textContent = document.getElementById('address2').value;
    document.getElementById('reviewCity').textContent = document.getElementById('city').value;
    document.getElementById('reviewState').textContent = document.getElementById('state').value;
    document.getElementById('reviewZip').textContent = document.getElementById('zip').value;
    document.getElementById('reviewDisease').textContent = Array.from(document.querySelectorAll('input[name="disease"]:checked'))
        .map(disease => disease.value).join(', ');
    document.getElementById('reviewVaccinationStatus').textContent = document.querySelector('input[name="vaccinationStatus"]:checked').value;
    document.getElementById('reviewSalary').textContent = `$${document.getElementById('income-slider').value}`;
    document.getElementById('reviewEmail').textContent = document.getElementById('email').value;
    document.getElementById('reviewSymptoms').textContent = document.getElementById('symptoms').value;
    document.getElementById('reviewUsername').textContent = document.getElementById('userId').value;