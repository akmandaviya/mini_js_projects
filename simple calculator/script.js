let display = document.getElementById('display'); //taking display
buttons = document.querySelectorAll('button'); //taking all buttons
let screenValue = "";

for(item of buttons) {// for of loop
    item.addEventListener('click', (e) => { //printing in console all the text of buttons
        buttonText = e.target.innerText;
        console.log('Button text is :',buttonText);

        if(buttonText =='X') {
            buttonText ='*';
            screenValue += buttonText;
            display.value += buttonText;
            display.value = screenValue;
        }
        else if (buttonText == 'C') {
           screenValue = "";
           display.value = screenValue;
        }
        else if(buttonText == '=') {
            display.value = eval(screenValue);
        }
        else {
            screenValue +=buttonText;
            display.value =screenValue;
        }
    }) 
}