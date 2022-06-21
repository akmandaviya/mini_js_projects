function validateForm() {

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == "abdulkarim" && password == "000000") {
        alert("Access Granted");
        console.log("Validation passed");
    }else {
        alert("Access Denied");
        console.log("Validation failed");
    }
  
} 