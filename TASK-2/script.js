// REGISTER

document.getElementById("registerForm")
.addEventListener("submit", function(e){

e.preventDefault();

const username =
document.getElementById("username").value;

const email =
document.getElementById("email").value;

const password =
document.getElementById("password").value;

const confirmPassword =
document.getElementById("confirmPassword").value;

if(password !== confirmPassword){

alert("Passwords do not match");
return;

}

const user = {

username,
email,
password

};

localStorage.setItem(
"user",
JSON.stringify(user)
);

alert("Registration Successful");

this.reset();

});


// LOGIN

document.getElementById("loginForm")
.addEventListener("submit", function(e){

e.preventDefault();

const username =
document.getElementById("loginUsername").value;

const password =
document.getElementById("loginPassword").value;

const storedUser =
JSON.parse(localStorage.getItem("user"));

if(!storedUser){

alert("User Not Registered");
return;

}

if(
username === storedUser.username &&
password === storedUser.password
){

localStorage.setItem(
"loggedInUser",
storedUser.username
);

window.location.href =
"welcome.html";

}
else{

alert("Invalid Username or Password");

}

});


// PASSWORD MATCH

document.getElementById("confirmPassword")
.addEventListener("keyup", function(){

const pass =
document.getElementById("password").value;

const confirm =
this.value;

const msg =
document.getElementById("matchMsg");

if(confirm===""){
msg.innerHTML="";
return;
}

if(pass===confirm){

msg.innerHTML="✓ Passwords Match";
msg.style.color="green";

}else{

msg.innerHTML="✗ Passwords Do Not Match";
msg.style.color="red";

}

});


// SHOW PASSWORD

function togglePassword(id){

const field =
document.getElementById(id);

field.type =
field.type==="password"
? "text"
: "password";

}


// USERNAME CHECK

document.getElementById("username")
.addEventListener("keyup", function(){

const username =
this.value.toLowerCase();

const status =
document.getElementById("userStatus");

const reserved =
["admin","root","system"];

if(username===""){

status.innerHTML="";
return;

}

if(reserved.includes(username)){

status.innerHTML=
"Username already exists";

status.style.color="red";

}else{

status.innerHTML=
"Username available";

status.style.color="green";

}

});