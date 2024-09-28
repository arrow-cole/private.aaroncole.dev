const users = [
    { username: 'admin', password: 'City8map', access: ['*'] },
    { username: 'user', password: 'acole123', access: ['*'] },
    { username: 'interviewer', password: 'work2024', access: ['resume.file/resume.html'] }
];

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.username === username && user.password === password);

    const messageDiv = document.getElementById('message');
    if (user) {
        messageDiv.textContent = 'Login successful!';
        messageDiv.style.color = 'green';

        // Check if the user is 'interviewer' to redirect accordingly
        if (username === 'interviewer') {
            // Redirect to specific pages
            window.location.href = 'resume.file/index.html';
             } else if (username === 'admin') {
            window.location.href = 'admin/admin.html';
        } else {
            // For other users, redirect to a generic private page
            window.location.href = 'private.html';
        }
    } else {
        messageDiv.textContent = 'Invalid username or password!';
        messageDiv.textContent = 'Please try Again!';
        messageDiv.style.color = 'red';
    }
});
