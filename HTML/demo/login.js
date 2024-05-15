const fbLoginButton = document.getElementById('fb-login-button');

fbLoginButton.addEventListener('click', () => {
    // Đoạn mã này sẽ chuyển hướng người dùng đến trang Facebook để đăng nhập
    window.location.href = 'https://www.facebook.com/login.php';
});
