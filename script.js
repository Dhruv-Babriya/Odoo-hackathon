function signup()
{
let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let role =
document.getElementById("role").value;

if(name=="" || email=="" || password=="")
{
alert("Fill all fields");
return;
}

localStorage.setItem(
"userEmail",
email
);

localStorage.setItem(
"userPassword",
password
);

localStorage.setItem(
"role",
role
);

alert("Account Created");

window.location="index.html";
}

function login()
{
let email =
document.getElementById("email").value;

let password =
document.getElementById("password").value;

let savedEmail =
localStorage.getItem("userEmail");

let savedPassword =
localStorage.getItem("userPassword");

if(email==savedEmail &&
password==savedPassword)
{
window.location=
"dashboard.html";
}
else
{
alert("Invalid Login");
}
}

function resetPassword()
{
alert(
"Password Reset Link Sent"
);
}