document.addEventListener('DOMContentLoaded', function() {
    // Show password toggle
    const showPasswordBtn = document.querySelector('.show-password');
    const passwordInput = document.getElementById('password');

    showPasswordBtn.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            showPasswordBtn.innerHTML = '<i class="fas fa-eye-slash"></i>';
        } else {
            passwordInput.type = 'password';
            showPasswordBtn.innerHTML = '<i class="fas fa-eye"></i>';
        }
    });

    // Form submission
    const loginForm = document.getElementById('loginForm');
    const loginBox = document.querySelector('.login-box');
    const successMessage = document.querySelector('.success-message');
    const welcomeUser = document.getElementById('welcome-user');

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (password === 'caryz48') {
            // Successful login
            loginBox.classList.add('hidden');
            
            setTimeout(() => {
                successMessage.classList.add('active');
                
                // Change welcome message with username if provided
                if (username) {
                    welcomeUser.textContent = username;
                }
            }, 500);
        } else {
            // Wrong password animation
            loginForm.classList.add('shake');
            setTimeout(() => {
                loginForm.classList.remove('shake');
            }, 500);
            
            // Show error on password field
            const passwordGroup = document.querySelector('.input-group:nth-child(2)');
            passwordGroup.querySelector('.underline').style.backgroundColor = '#ff4757';
            passwordGroup.querySelector('input').style.borderBottomColor = '#ff4757';
            
            setTimeout(() => {
                passwordGroup.querySelector('.underline').style.backgroundColor = '';
                passwordGroup.querySelector('input').style.borderBottomColor = '';
            }, 2000);
        }
    });
});