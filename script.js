const row= document.getElementsByClassName("row");
const calc= document.getElementById("row");
const display= document.getElementById("display");

let currentInput= '';

buttton.forEach(button => {

    button.addEventListener('click',() =>{
        const value= getAttribute('data-value');
    })
    

    if (value= "C"){
    currentInput= '';
    }
    else if (value="X"){
        currentInput=currentInput.slice(0,-1);
    }
    else if(value=== "="){
        currentInput=calculate(currentInput);
    }
    else {
        currentInput +=value;
    }
});

