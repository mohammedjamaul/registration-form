function validateForm() {

    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('phoneError').innerText = '';
    document.getElementById('passwordError').innerText = '';
    document.getElementById('confirmPasswordError').innerText = '';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    let valid = true;

    if (name.length < 3) {
        document.getElementById('nameError').innerText = 'Name must be at least 3 characters long.';
        valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById('emailError').innerText = 'Please enter a valid email address.';
        valid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
        document.getElementById('phoneError').innerText = 'Phone number must be exactly 10 digits.';
        valid = false;
    }

    if (password === '') {
        document.getElementById('passwordError').innerText = 'Password cannot be empty.';
        valid = false;
    }

    return valid;
}