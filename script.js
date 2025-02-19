// Interactive Button: Toggle Background Color
let isLight = true;
function toggleBackgroundColor() {
    document.body.style.backgroundColor = isLight ? 'lightblue' : 'lightgreen';
    isLight = !isLight;
}

// Slider with Real-Time Feedback: Adjust Text Size
function updateTextSize() {
    const textSize = document.getElementById('text-size').value;
    document.getElementById('text-example').style.fontSize = `${textSize}px`;
}

// Modal with Event Listeners
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Form Validation
function validateForm() {
    let valid = true;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Name Validation
    if (name.length < 3) {
        document.getElementById('name-error').textContent = 'Name must be at least 3 characters long.';
        valid = false;
    } else {
        document.getElementById('name-error').textContent = '';
    }

    // Email Validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        valid = false;
    } else {
        document.getElementById('email-error').textContent = '';
    }

    // Password Validation
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters, with at least one uppercase letter and one number.';
        valid = false;
    } else {
        document.getElementById('password-error').textContent = '';
    }

    // Prevent form submission if invalid
    return valid;
}

// Dropdown Menu (Bonus) Event Handler
function displayMessage() {
    const selectedOption = document.getElementById('dropdown').value;
    const message = document.getElementById('message');

    if (selectedOption) {
        message.textContent = `You selected: ${selectedOption}`;
    } else {
        message.textContent = '';
    }
}
