<!-- Example HTML -->
<form id="loginForm">
  <input type="text" id="username" placeholder="Username" />
  <input type="password" id="password" placeholder="Password" />
  <button type="submit">Login</button>
  <p id="error" style="color:red;"></p>
</form>

<script>
document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();
    let err  = document.getElementById("error");

    // Clear previous error
    err.textContent = "";

    if (user === "" || pass === "") {
        err.textContent = "All fields are required!";
        return;
    }

    if (user === "admin" && pass === "1234") {
        window.location.href = "welcome.html";
    } else {
        err.textContent = "Invalid username or password!";
    }
});
</script>
