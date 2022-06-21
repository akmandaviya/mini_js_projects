function addMore() {
    let name = document.getElementById('name').value;
    if(name == "")  {
        document.getElementById('error').innerHTML="Please enter the data";
    }else {
        let box = document.getElementById('box');
        let li = document.createElement('li');
        li.textContent=name;
        
        // for removing data
        let a = document.createElement('a');
        a.textContent = "Delete";
        a.href = "javascript:void(0)";
        a.className="remove";
        li.appendChild(a);

        //this will add the new names at top 
        let check = box.firstElementChild; //checking if data is there or not
        if(check == null) {
        box.appendChild(li); //add in bottom
        } else {
            box.insertBefore(li,check);
        }

        // // we can also make a simple one by only adding data in bottom  by:
        //   box.appendChild(li);
        
    }
    document.getElementById('name').value=""; //-> to clear the text field after data entered.
}
//event listner
let btn =document.querySelector('ul');
btn.addEventListener('click',function(e){//-> e is to retrieve the data 

    let box = document.getElementById('box');
    let li = e.target.parentNode;
    box.removeChild(li);
});