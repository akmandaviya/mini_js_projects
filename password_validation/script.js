function submitForm(){


    const password = document.getElementById('password').value
    const confirmPassword = document.getElementById('cnf-password').value

    let message = document.getElementById('message')
    let validPassword = document.getElementById('valid-password')

     if(password.length <= 5) {
        validPassword.textContent="Password should be more than 5 letters"
        validPassword.style.color="red"
        validPassword.style.fontSize="10px"
        validPassword.style.fontWeight="bolder"
     }

     else {
        if(password.length != 0) {
            if(password == confirmPassword) {
                message.textContent="Password match"
                message.style.color="green"
                message.style.fontSize="10px"
                message.style.fontWeight="bolder"
            }else {
                message.textContent="Password mismatch"
                message.style.color="red"
                message.style.fontSize="10px"
                message.style.fontWeight="bolder"
            }
        }
        else {
            alert("Password cannot be empty")
            message.textContent=""
        }


       validPassword.textContent="" 
     }

    
}