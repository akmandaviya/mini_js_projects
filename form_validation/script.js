
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const age = document.getElementById('age');
    const email = document.getElementById('email');
    
    function validateForm() {
    if(fname.value == "" || lname.value == "" || age.value == "" || email.value == "") {
        alert("Fields cannot be empty");
        return false;
    }

    else if (fname.value.length < 3 || lname.value.length < 3){
        alert("enter more then 3 characters");
        return false;
        
    }
    else {
     return true;
     
    }
}

