var usersArray = [];

// User constructor function
function User(username, password, email, gender, city) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.gender = gender;
    this.city = city;
}

var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

function validateEmail(email) {
    return emailRegex.test(email);
}

document.getElementById('createAccountForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    
    clearErrors();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var email = document.getElementById('email').value;
    var gender = document.querySelector('input[name="gender"]:checked');
    var city = document.getElementById('city').value;
    
    var isValid = true;
    
    if (username === '') {
        isValid = false;
        showError('usernameError', 'Username is required');
    } else if (isUsernameExist(username)) {
        isValid = false;
        showError('usernameError', 'Username already exists');
    }

    if (password === '') {
        isValid = false;
        showError('passwordError', 'Password is required');
    }

    if (email === '') {
        isValid = false;
        showError('emailError', 'Email is required');
    } else if (!validateEmail(email)) {
        isValid = false;
        showError('emailError', 'Invalid email format');
    } else if (isEmailExist(email)) {
        isValid = false;
        showError('emailError', 'Email already exists');
    }

    if (!gender) {
        isValid = false;
        showError('genderError', 'Gender is required');
    }

    if (city === '') {
        isValid = false;
        showError('cityError', 'City is required');
    }

    if (isValid) {
        var user = new User(username, password, email, gender.value, city);
        usersArray.push(user);

        document.getElementById('successMessage').style.display = 'block';
        
        setTimeout(() => {
            document.getElementById('successMessage').style.display = 'none';
            clearForm();
        }, 3000);
    }
});

function isUsernameExist(username) {
    return usersArray.some(function(user) {
        return;
    });
}

function isEmailExist(email) {
    return usersArray.some(function(user) {
        return;
    });
}

function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    document.getElementById('usernameError').text = '';
    document.getElementById('passwordError').text = '';
    document.getElementById('emailError').text = '';
    document.getElementById('genderError').text = '';
    document.getElementById('cityError').text = '';
}

function clearForm() {
    document.getElementById('createAccountForm').reset();
}

console.log(usersArray);
