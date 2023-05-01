function validate() {
    const myForm = document.querySelector("#myform");
    const nameInput = document.querySelector("#name");
    const countryInput = document.querySelector("#country");
    const genderInputs = document.querySelectorAll('input[name="gender"]');
    const preferencesInputs = document.querySelectorAll('input[name="preference"]');
    const phoneInput = document.querySelector("#phone");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const verifyPasswordInput = document.querySelector("#verifyPassword");
    const nameError = document.querySelector("#nameError");
    const countryError = document.querySelector("#countryError");
    const genderError = document.querySelector("#genderError");
    const preferencesError = document.querySelector("#preferencesError");
    const phoneError = document.querySelector("#phoneError");
    const emailError = document.querySelector("#emailError");
    const passwordError = document.querySelector("#passwordError");
    const verifyPasswordError = document.querySelector("#verifyPasswordError");
    const zipCodeInput = document.querySelector("#zipCode");
    const zipCodeError = document.querySelector("#zipCodeError");
    

    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.innerHTML = "Name is required";
        isValid = false;
    } else {
        nameError.innerHTML = "";
    }
    // Zip Code validation
    if (zipCodeInput.value.trim() === "") {
        zipCodeError.innerHTML = "Zip Code is required";
        isValid = false;
    } else {
        zipCodeError.innerHTML = "";
    }

    // Country validation
    if (countryInput.value === "") {
        countryError.innerHTML = "Country is required";
        isValid = false;
    } else {
        countryError.innerHTML = "";
    }

    // Gender validation
    let genderSelected = false;
    genderInputs.forEach((input) => {
        if (input.checked) {
            genderSelected = true;
        }
    });

    if (!genderSelected) {
        genderError.innerHTML = "Gender is required";
        isValid = false;
    } else {
        genderError.innerHTML = "";
    }

    // Preferences validation
    let preferencesSelected = false;
    preferencesInputs.forEach((input) => {
        if (input.checked) {
            preferencesSelected = true;
        }
    });

    if (!preferencesSelected)
        // Phone validation
        if (phoneInput.value.trim() === "") {
            phoneError.innerHTML = "Phone is required";
            isValid = false;
        } else {
            phoneError.innerHTML = "";
        }

    // Email validation
    if (emailInput.value.trim() === "") {
        emailError.innerHTML = "Email is required";
        isValid = false;
    } else {
        emailError.innerHTML = "";
    }

    // Password validation
    if (passwordInput.value.trim() === "") {
        passwordError.innerHTML = "Password is required";
        isValid = false;
    } else {
        passwordError.innerHTML = "";
    }

    // Verify password validation
    if (verifyPasswordInput.value.trim() === "") {
        verifyPasswordError.innerHTML = "Verify password is required";
        isValid = false;
    } else if (verifyPasswordInput.value !== passwordInput.value) {
        verifyPasswordError.innerHTML = "Passwords do not match";
        isValid = false;
    } else {
        verifyPasswordError.innerHTML = "";
    }
    
    return isValid;
}