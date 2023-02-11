const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

   if (email && password) {
  // this will call:
  //    controllers/api/user-routes.js
  // then, find the post route: "router.post('/login', async (req, res) => {"
   const response = await fetch('/api/users/login', {
     method: 'POST',
     body: JSON.stringify({ email, password }),
     headers: { 'Content-Type': 'application/json' },
   });

   console.log(response.body);

  // const response = await fetch("/api/users/login", {
  //   method: "POST",
  //   body: JSON.stringify({
  //     email: email.value,
  //     password: password.value,
  //   }),
  //   headers: { "Content-Type": "application/json" },
  // });

  // if successfully logged-in, send to: localhost:3001/dashboard
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to log in.");
  }
  
console.log("email", email, "password", password);

 };
}
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-register").value.trim();
  const email = document.querySelector("#email-register").value.trim();
  const password = document.querySelector("#password-register").value.trim();

  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
document
  .querySelector(".register-form")
  .addEventListener("submit", signupFormHandler);
