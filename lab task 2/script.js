let wrongCount = 0;

document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let error = "";

    // Email validation
    if(email.indexOf("@") === -1){
        error += "Email must contain @ <br>";
    }

    // Password length
    if(password.length < 6){
        error += "Password must be at least 6 characters <br>";
    }

    // Password must contain #
    if(password.indexOf("#") === -1){
        error += "Password must contain # <br>";
    }

    if(error !== ""){
        wrongCount++;

        document.getElementById("error").innerHTML = error;
        document.getElementById("success").innerHTML = "";
        document.getElementById("count").innerHTML =
        "Wrong submission count: " + wrongCount;
    }
    else{
        document.getElementById("error").innerHTML = "";
        document.getElementById("success").innerHTML = "Login Successful!";
    }

});