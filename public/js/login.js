const loginFormHandler = async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

   if (email && password) {
  // this will call:
  //    controllers/api/user-routes.js
  // then, find the post route: "router.post('/login', async (req, res) => {"
  console.log("Gathering email and password to send to server.");
   const response = await fetch('/api/users/login', {
     method: 'POST',
     body: JSON.stringify({ email, password }),
     headers: { 'Content-Type': 'application/json' },
   });
   console.log("Response sent: ");
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
    console.log('Log in successful.');
    document.location.replace("/dashboard");
  } else {
    console.log("Failed to log in.");
    alert("Failed to log in.");
  }
  
console.log("Email: ", email, "Password: ", password);

 };
}
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#username-register").value.trim();
  const email = document.querySelector("#email-register").value.trim();
  const password = document.querySelector("#password-register").value.trim();

  console.log("Attempting to register user.");
  if (username && email && password) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      console.log('Sign up successful.');
      document.location.replace("/dashboard");
    } else {
      console.log("Registration failed.");
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
