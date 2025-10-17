// Replace this URL with your actual backend URL from Render
const backend = "https://your-login-backend.onrender.com";

const message = document.getElementById("message");

// Signup form
document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const username = e.target.username.value;
  const email = e.target.email.value;
  const password = e.target.password.value;

  const res = await fetch(`${backend}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password })
  });

  const data = await res.json();
  message.textContent = data.message || data.error;
});

// Login form
document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const res = await fetch(`${backend}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();
  message.textContent = data.message || data.error;
});
