function checkPassword() {
 let password = document.getElementById('password').value;
 let cnfPassword = document.getElementById('cnf-password').value;
 console.log(password,cnfPassword);

 let message = document.getElementById('message');
 
 if(password.length != 0) {
      if(password == cnfPassword) {
          message.textContent = "Password match";
          message.style.backgroundColor="green";
      }else {
          message.textContent = "Password don't match";
          message.style.backgroundColor="red";
      }
 }
 else{

     alert("Password can't be empty");
     message.textContent= "";
 }
}

