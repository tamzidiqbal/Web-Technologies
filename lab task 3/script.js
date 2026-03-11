let registrants = [];

let virtualCount = 0;
let inPersonCount = 0;

const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let company = document.getElementById("company").value.trim();

let attendance = document.querySelector('input[name="attendance"]:checked');

let valid = true;

document.getElementById("nameError").innerText = "";
document.getElementById("emailError").innerText = "";
document.getElementById("attendanceError").innerText = "";

if(name.length < 6 || name.length > 100){
document.getElementById("nameError").innerText =
"Name must be between 6 and 100 characters.";
valid = false;
}

if(!email.includes("@") || !email.includes(".")){
document.getElementById("emailError").innerText =
"Please enter a valid email.";
valid = false;
}

if(!attendance){
document.getElementById("attendanceError").innerText =
"Please select attendance type.";
valid = false;
}

if(valid){

let type = attendance.value;

registrants.push({
name:name,
email:email,
company:company,
attendance:type
});

if(type === "Virtual"){
virtualCount++;
}else{
inPersonCount++;
}

document.getElementById("total").innerText = registrants.length;
document.getElementById("virtual").innerText = virtualCount;
document.getElementById("inperson").innerText = inPersonCount;

form.reset();

alert("Registration Successful!");

}

});


const analyticsBtn = document.getElementById("analyticsBtn");
const panel = document.getElementById("analyticsPanel");

analyticsBtn.addEventListener("click", function(){

if(panel.style.display === "none"){
panel.style.display = "block";
analyticsBtn.innerText = "Hide Event Analytics";
}
else{
panel.style.display = "none";
analyticsBtn.innerText = "Show Event Analytics";
}

});